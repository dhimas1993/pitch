import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import alertRed from '../../utils/alert'

function Account (item) {
    const [Data, setData] = useState(`${process.env.REACT_APP_URL}${item.startupLogo}`)
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Confirm, setConfirm] = useState('')
    const [image, setImage] = useState('')
    const [ImageData, setImageData] = useState('')

    const id = useSelector(state => state.Auth._id)

    const getUser = async () => {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/users/users/${id}`)
        .then(res => {
            setData(res.data)
        }).catch(err => {
            console.log(err.message)
        })
    }

    useEffect(() => {
        getUser()
    }, [])
    useEffect(() => {
        getUser()
    }, [])

    const handleSubmit = async () => {
        if( Password === Confirm){
            let data = new FormData();
            data.append("id", id)
            data.append("password", Password)
            data.append("image", image ? image : item.startupLogo)

            await axios.put(`${process.env.REACT_APP_BASE_URL}/users/EditAccount`,
                data
            ).then((res) => {
                alertRed("SUCCESS")
                window.location.reload()
            }).catch((err) => {
                alertRed("FAIL", "Field Password not Match")
                console.log(err.message)
            })
        } else {
            alertRed("FAIL", "Field Password Not Match")
        } 
    }

    const onChangeHandler = e => {
        if (e.target.files[0]) {
            console.log("picture: ", e.target.files);
            setImage(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImageData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <>
            <h2 className="heading-title-personal-info">
                My Settings
            </h2>
            <div className="wrap-company-information">
                <div className="col-company-info-img">
                    <div className="ava-img-company">
                        <img src={ ImageData ? ImageData : `${process.env.REACT_APP_URL}${item.startupLogo}` } className="ava-company-profile2" />
                    </div>
                    {/* <div className="bt-change-photo-company">
                        change photo
                        <div className="edit-company-info">
                            <input onChange={onChangeHandler} type="file" className="input-company-upload-hide2" accept=".png, .jpg, .jpeg" />
                        </div>
                    </div> */}
                </div>
                <div className="col-company-info-form">
                    {/* item */}
                    <div className="row-item-ip">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="item-form-personal-information-profile">
                                    <h4 className="title-f-personal-information-profile">
                                        Email
                                    </h4>
                                    <div className="input-sec-f-personal-information-p">
                                        <input type="text" value={item.email} onChange={(e) => setEmail(e.target.value)} className="i-f-personal-info-p" name="email" placeholder="Enter Email" disabled/>
                                        <label htmlFor="email" generated="true" className="error custom-f-regist" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div className="row-item-ip">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="item-form-personal-information-profile">
                                    <h4 className="title-f-personal-information-profile">
                                        Password
                                    </h4>
                                    <div className="input-sec-f-personal-information-p">
                                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="i-f-personal-info-p" placeholder="Enter New Password" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div className="row-item-ip">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="item-form-personal-information-profile">
                                <h4 className="title-f-personal-information-profile">
                                    Confirm Password
                                </h4>
                                <div className="input-sec-f-personal-information-p">
                                    <input type="password" onChange={(e) => setConfirm(e.target.value)} className="i-f-personal-info-p" name="password_confirm" placeholder="Confirm New Password" />
                                    <label htmlFor="password_confirm" generated="true" className="error custom-f-regist" />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrap-bt-save-changes-personal-info">
                        <input onClick={handleSubmit} type="submit" className="bt-save-changes-personal-info" defaultValue="Save Changes" />
                    </div>
                </div>
                <div className="clear" />
            </div>
        </>
    )
}

export default Account

