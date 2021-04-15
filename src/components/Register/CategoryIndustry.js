import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom';
import Navigationbar from './Parts/NavigationInfo'
import axios from 'axios';

function CategoryIndustry(){
    const [Category, setCategory] = useState('')
    const [Choose, setChoose] = useState('')
    const [redirect, setRedirect] = useState(false)

    const _id = useSelector(state => state.Auth._id)

    const handleAddrTypeChange = (e) => {
        // console.log(e.target.value)
        setChoose(e.target.value)
    }

    const getCategory = async () => {
        const category = await axios.get(`${process.env.REACT_APP_BASE_URL}/dashboard/category`)
        .then((res) => {
            // console.log(res.data.data)
            setCategory(res.data.data)
        })
    }

    const handleClick = async () => {
        const id = _id
        const category = Choose
        // console.log(id, id_category)
        await axios.put(`${process.env.REACT_APP_BASE_URL}/users/registerStartupCategory`,{
            id,
            category
        }).then((res) => {
            setRedirect(true)
            console.log(res.data)
        }).catch(err => {
            console.log(err.message)
        })
    }

    useEffect(() => {
        getCategory()
    }, [])

    return (
        <div>
            {redirect ? <Redirect to="/CompanyInformation3" /> : null}
            <div className="all-wrap-regist-platform">
                <div className="wrap-regist-platform-page">
                    <Navigationbar Navigationactive="navigation1"></Navigationbar>
                    <div className="wrap-regis-form-c">
                        {/* <!-- regist form content --> */}
                        <h2 className="head-title-regist-platform-c">
                            What category / industry is your business in?
                        </h2>
                        <div className="f-regist2">
                            {/* <!-- item --> */}
                            <div className="item-input-f-regist1">
                                <div className="select-f-regst-c">
                                    <select onChange={e => handleAddrTypeChange(e)} className="js-select2 select-signup-c-item-select" name="">
                                        <option value="">--- SELECT ONE ---</option>
                                        {
                                            Category ? 
                                            Category.map((item) => {
                                                return (
                                                    <option value={item._id}>{item.name}</option>
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