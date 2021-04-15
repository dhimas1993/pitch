import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import alertRed from '../../utils/alert'

function Company (Data, User) {
    const [StartupName, setStartupName] = useState(null)
    const [ShortDescription, setShortDescription] = useState(null)
    const [WebsiteLink, setWebsiteLink] = useState(null)
    const [Category, setCategory] = useState(null)
    const [CatChoose, setCatChoose] = useState(null)
    const [Location, setLocation] = useState(null)
    const [LocChoose, setLocChoose] = useState(null)
    const [StartupStage, setStartupStage] = useState(null)
    const [elevatorPitch, setelevatorPitch] = useState(null)
    const [Picture, setPicture] = useState(null)
    const [ImgData, setImgData] = useState(null)

    const id = useSelector(state => state.Auth._id)

    useEffect(() => {
        getCategory()
        getCity()
    }, [])
    
    const onChangeStarupLogo = e => {
        if (e.target.files[0]) {
            console.log("picture: ", e.target.files);
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const getCategory = async () => {
        const category = await axios.get(`${process.env.REACT_APP_BASE_URL}/dashboard/category`)
        .then((res) => {
            // console.log(res.data.data)
            setCategory(res.data.data)
        })
    }

    const getCity = async () => {
        await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/provinsi`)
        .then((res) => {
            setLocation(res.data.provinsi)
        }).catch((err) => {
            console.log(err.message)
        })
    } 

    const handleClick = async () => {
        let data = new FormData();
        data.append("id", id)
        data.append("image", Picture ? Picture : Data.Picture )
        data.append("startupName", StartupName ? StartupName : Data.startupName)
        data.append("shortDescription", ShortDescription ? ShortDescription : Data.shortDescription)
        data.append('websiteLink', WebsiteLink ? WebsiteLink : Data.websiteLink)
        data.append('category', CatChoose ? CatChoose : Data.category._id)
        data.append('location', LocChoose ? LocChoose : Data.location)
        data.append('startupStage', StartupStage ? StartupStage : Data.startupStage)
        data.append('elevatorPitch', elevatorPitch ? elevatorPitch : Data.elevatorPitch)
        // console.log(id, Picture, StartupName, ShortDescription, WebsiteLink, CatChoose, LocChoose, StartupStage, elevatorPitch)
        const submit = await axios.put(`${process.env.REACT_APP_BASE_URL}/users/registerStartup`, data )
        console.log(submit)
        if(submit.status == 201){
            alertRed("FAIL", submit.data)
        } else {
            alertRed("SUCCESS")
            window.location.reload()
        }
    }

    return (
        <>
            <h2 className="heading-title-personal-info">
                Company Information
            </h2>
            <div className="wrap-company-information">
                <div className="col-company-info-img">
                    <div className="ava-img-company">
                        <img src={ImgData ? ImgData : `${process.env.REACT_APP_URL}${Data.startupLogo}`} className="ava-company-profile" alt />
                    </div>
                    <div className="bt-change-photo-company">
                        change photo
                        <div className="edit-company-info">
                            <input onChange={onChangeStarupLogo} type="file" className="input-company-upload-hide" accept=".png, .PNG, .jpeg, .JPEG, .jpg, .JPG"/>
                        </div>
                    </div>
                </div>
                <div className="col-company-info-form">
                    {/* item */}
                    <div className="row-item-ip">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="item-form-personal-information-profile">
                                    <h4 className="title-f-personal-information-profile">
                                        Startup Name
                                    </h4>
                                    <div className="input-sec-f-personal-information-p">
                                        <input onChange={e => setStartupName(e.target.value)} value={StartupName} type="text" className="i-f-personal-info-p" placeholder={Data.startupName} />
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
                                        Short Description
                                    </h4>
                                    <div className="input-sec-f-personal-information-p">
                                        <textarea  className="text-area-input-com" onChange={e => setShortDescription(e.target.value)} value={ShortDescription} placeholder={Data.shortDescription} />
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
                                        Website Link / URL
                                    </h4>
                                    <div className="input-sec-f-personal-information-p">
                                        <input type="text" className="i-f-personal-info-p" onChange={e => setWebsiteLink(e.target.value)} value={WebsiteLink} placeholder={Data.websiteLink}/>
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
                                        Category / Industry
                                    </h4>
                                    <div className="input-sec-f-personal-information-p select-f-regst-c">
                                        <select onChange={(e) => setCatChoose(e.target.value)} className="js-select2 select-signup-c-item-select select2-hidden-accessible" name data-select2-id={1} tabIndex={-1} aria-hidden="true">
                                            <option value="">--- SELECT ONE ---</option>
                                            {
                                                Category ? Category.map((item) => {
                                                    return (
                                                        <option value={item._id}>{item.name}</option>
                                                    )
                                                }) : null
                                            }
                                        </select>
                                        <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={2} style={{width: 'auto'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2--92-container"><span className="select2-selection__rendered" id="select2--92-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Select Category</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
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
                                        Location
                                    </h4>
                                    <div className="input-sec-f-personal-information-p select-f-regst-c">
                                        <select onChange={(e) => setLocChoose(e.target.value)} className="js-selectlocation select-signup-c-item-select select2-hidden-accessible" name data-select2-id={4} tabIndex={-1} aria-hidden="true">
                                            <option value="">--- SELECT ONE ---</option>
                                            {
                                                Location ? 
                                                Location.map((item) => {
                                                    return (
                                                        <option value={item.nama}>{item.nama}</option>
                                                    )
                                                }) : null
                                            }
                                        </select>
                                        <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={5} style={{width: 'auto'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2--7e-container"><span className="select2-selection__rendered" id="select2--7e-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Enter Location</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
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
                                        Startup Stage
                                    </h4>
                                    <div className="input-sec-f-personal-information-p select-f-regst-c">
                                        <select onChange={(e) => setStartupStage(e.target.value)}  className="js-selectstartupstage select-signup-c-item-select select2-hidden-accessible" name data-select2-id={7} tabIndex={-1} aria-hidden="true">
                                            <option value="">--- SELECT ONE ---</option>
                                            <option value="Ideation / Concept Only">Ideation / Concept Only</option>
                                            <option value="Prototype Ready">Prototype Ready</option>
                                            <option value="Launch with no Revenue">Launch with no Revenue</option>
                                            <option value="Startup Stage">Startup Stage</option>
                                        </select>
                                        <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={8} style={{width: 'auto'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2--ye-container"><span className="select2-selection__rendered" id="select2--ye-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Startup Stage</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
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
                                        Elevator Pitch
                                    </h4>
                                    <div className="input-sec-f-personal-information-p">
                                        <input onChange={(e) => setelevatorPitch(e.target.value)} type="text" className="i-f-personal-info-p" placeholder={Data.elevatorPitch} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrap-bt-save-changes-personal-info">
                        <input onClick={handleClick} type="submit" className="bt-save-changes-personal-info" defaultValue="Save Changes" />
                    </div>
                </div>
                <div className="clear" />
            </div>
        </>
    )
}

export default Company