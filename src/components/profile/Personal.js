import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import alertRed from '../../utils/alert'
import Loading from '../../utils/loading'

function Personal (Data) {
    const [FirstName, setFirstName] = useState(Data.firstName)
    const [LastName, setLastName] = useState(Data.lastName)
    const [JobTitle, setJobTitle] = useState(Data.jobTitle)
    const [LinkedinProfile, setLinkedinProfile] = useState(Data.linkedinProfile)
    const [Loading, setLoading] = useState(false)

    const id = useSelector(state => state.Auth._id)

    const handleClick = async () => {
        setLoading(true)
        const data = {
            id : id,
            firstName : FirstName ? FirstName : Data.firstName,
            lastName : LastName ? LastName : Data.lastName,
            jobTitle : JobTitle ? JobTitle : Data.jobTitle,
            linkedinProfile : LinkedinProfile ? LinkedinProfile : Data.linkedinProfile
        }

        const result = await axios.put(`${process.env.REACT_APP_BASE_URL}/users/EditPersonal`, data )
        console.log(result)

        if(result.status == 201){
            alertRed("FAIL", result.data)
        } else {
            alertRed("SUCCESS")
            window.location.reload()
        } 
    }

    
    return (
        <>
            <h2 className="heading-title-personal-info">
                Personal Information
            </h2>
            <div className="wrap-form-personal-information-profile">
                <div className="row-item-ip">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="item-form-personal-information-profile">
                                <h4 className="title-f-personal-information-profile">
                                    First Name
                                </h4>
                                <div className="input-sec-f-personal-information-p">
                                    <input onChange={(e) => setFirstName(e.target.value)} placeholder={FirstName !== undefined ? FirstName : Data.firstName} type="text" className="i-f-personal-info-p"  required/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="item-form-personal-information-profile">
                                <h4 className="title-f-personal-information-profile">
                                    Last Name
                                </h4>
                                <div className="input-sec-f-personal-information-p">
                                    <input onChange={(e) => setLastName(e.target.value)} type="text" className="i-f-personal-info-p" placeholder={LastName ? LastName : Data.lastName} required/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-item-ip">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="item-form-personal-information-profile">
                                <h4 className="title-f-personal-information-profile">
                                    Position
                                </h4>
                                <div className="input-sec-f-personal-information-p">
                                    <input onChange={(e) => setJobTitle(e.target.value)} type="text" className="i-f-personal-info-p" placeholder={JobTitle ? JobTitle : Data.jobTitle} required/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-item-ip">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="item-form-personal-information-profile">
                                <h4 className="title-f-personal-information-profile">
                                    LinkedIn Profile
                                </h4>
                                <div className="input-sec-f-personal-information-p">
                                    <input onChange={(e) => setLinkedinProfile(e.target.value)} type="text" className="i-f-personal-info-p"  placeholder={LinkedinProfile ? LinkedinProfile : Data.linkedinProfile} required/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrap-bt-save-changes-personal-info">
                    <input onClick={handleClick} type="submit" className="bt-save-changes-personal-info" defaultValue="Save Changes" />
                </div> 
            </div>
        </>
    )
}

export default Personal
