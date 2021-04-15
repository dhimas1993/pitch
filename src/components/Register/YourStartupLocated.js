import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux'
import Navigationbar from './Parts/NavigationInfo'
import axios from 'axios'

function CategoryIndustry (){
    const [City, setCity] = useState(null)
    const [Choose, setChoose] = useState(null)
    const [redirect, setRedirect] = useState(false)

    const _id = useSelector(state => state.Auth._id)

    const handleAddrTypeChange = (e) => {
        // console.log(_id,e.target.value)
        setChoose(e.target.value)
    }

    const getCity = async () => {
        await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/provinsi`)
        .then((res) => {
            setCity(res.data.provinsi)
        }).catch((err) => {
            console.log(err.message)
        })
    } 

    const handleClick = async () => {
        const id = _id
        const city = Choose
        // console.log(id, id_category)
        await axios.put(`${process.env.REACT_APP_BASE_URL}/users/registerLocated`,{
            id,
            city
        }).then((res) => {
            setRedirect(true)
            console.log(res.data)
        }).catch(err => {
            console.log(err.message)
        })
    }
    
    useEffect(() => {
        getCity()
    }, [])

    return (
        <div>
            {redirect ? <Redirect to="/CompanyInformation4" /> : null}
            <div className="all-wrap-regist-platform">
                <div className="wrap-regist-platform-page">
                    <Navigationbar Navigationactive="navigation1"></Navigationbar>
                    <div className="wrap-regis-form-c">
                        {/* <!-- regist form content --> */}
                        <h2 className="head-title-regist-platform-c">
                        Where is your startup located?
                        </h2>
                        <div className="f-regist2">
                            {/* <!-- item --> */}
                            <div className="item-input-f-regist1">
                                <div className="select-f-regst-c">
                                    <select onChange={e => handleAddrTypeChange(e)} className="js-select2 select-signup-c-item-select" name="">
                                        <option value="">--- SELECT ONE ---</option>
                                        {
                                            City ? 
                                            City.map((item) => {
                                                return (
                                                    <option value={item.nama}>{item.nama}</option>
                                                )
                                            }) : null
                                        }
                                    </select>
                                </div>
                            </div>
                            {/* <!-- item --> */}
                            <div className="item-input-f-regist1">
                                <div className="input-f-regst-c2">
                                    <input onClick={() => handleClick()} type="submit" value="Next" className="bt-next-submit-reg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CategoryIndustry