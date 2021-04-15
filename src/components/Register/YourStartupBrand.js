import React, {useEffect, useState} from 'react';
import { Link, Redirect } from 'react-router';
import { useSelector } from 'react-redux'
import $ from 'jquery';
import axios from 'axios'
import Navigationbar from './Parts/NavigationInfo'
import LogoUpload from '../../assets/images/iconup.png';

function YourStartupBrand (){
    const [StartupName, setStartupName] = useState('')
    const [ShortDescription, setShortDescription] = useState('')
    const [WebsiteLink, setWebsiteLink] = useState('')
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const [redirect, setRedirect] = useState(false)

    const id = useSelector(state => state.Auth._id)
    
    useEffect(() => {
        $('.uploadBtn').change(function(){
            // $(this).parent().next().next().children().val($(this).val());
            var valupload = $(this).val();
            document.getElementById("file-upload-logo-info").innerHTML = valupload;
            $("#file-upload-logo-info").show();
            $(".hide-when-active").hide();
        });
    }, [])

    const handleClick = async () => {
        let data = new FormData();
        data.append("image", picture)
        data.append("id", id)
        data.append("startupName", StartupName)
        data.append("shortDescription", ShortDescription)
        data.append("websiteLink", WebsiteLink)

        if(StartupName !== '' && ShortDescription !== '' && WebsiteLink !== ''){
            await axios.put(`${process.env.REACT_APP_BASE_URL}/users/registerStartup`, 
                data
            ).then((res) => {
                setRedirect(true)
            }).catch((err) => {
                console.log(err.message)
            })
        } else {
            console.log('dua')
        }
    }

    const onChangePicture = e => {
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

    return (
        <div>
            {redirect ? <Redirect to="/CompanyInformation2" /> : null}
            <div className="all-wrap-regist-platform">
                <div className="wrap-regist-platform-page">
                    <Navigationbar Navigationactive="navigation1"></Navigationbar>
                    <div className="wrap-regis-form-c">
                        {/* <!-- regist form content --> */}
                        <h2 className="head-title-regist-platform-c">
                            Your Startup Brand
                        </h2>
                        <div className="f-regist1">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="upload-logo-brand">
                                        <div className="cus-file-upload-signup">
                                            <div className="fileUpload">
                                                <input type="file" className="upload uploadBtn" onChange={onChangePicture}/>
                                            </div>
                                            <div className="img-icon-upload-p">
                                                <img src={imgData} alt=""/>
                                            </div>
                                            <div className="custom-val-lg">
                                                <span id="file-upload-logo-info"></span>
                                                <span className="hide-when-active">
                                                    Drag your logo here <br/> or <span className="c-red">browse</span>
                                                    <span className="file-req-up-logo">
                                                        (file : .PNG)
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                    <label for="logost" generated="true" className="error custom-f-regist"></label>
                                </div>
                                <div className="col-lg-7">
                                    <div className="wrap-input-f-regist1">
                                        {/* <!-- item --> */}
                                        <div className="item-input-f-regist1">
                                            <h4 className="title-input-name-regist1">Startup Name</h4>
                                            <div className="input-f-regst-c">
                                                <input className="i-f-regist1" onChange={e => setStartupName(e.target.value)} type='text' />
                                            </div>
                                        </div>
                                        {/* <!-- item --> */}
                                        <div className="item-input-f-regist1">
                                            <h4 className="title-input-name-regist1">Short Description</h4>
                                            <div className="input-f-regst-c">
                                                <input className="i-f-regist1" onChange={e => setShortDescription(e.target.value)} type='text' />
                                            </div>
                                        </div>
                                        {/* <!-- item --> */}
                                        <div className="item-input-f-regist1">
                                            <h4 className="title-input-name-regist1">Website Link / URL</h4>
                                            <div className="input-f-regst-c">
                                                <input className="i-f-regist1" onChange={e => setWebsiteLink(e.target.value)} type='text' />   
                                            </div>
                                        </div>
                                        {/* <!-- item --> */}
                                        <div class="item-input-f-regist1">
                                            <div class="input-f-regst-c2">
                                                <input onClick={() => {handleClick()} } type="submit" value="Next" class="bt-next-submit-reg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default YourStartupBrand