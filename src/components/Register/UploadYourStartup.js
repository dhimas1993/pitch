import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import axios from 'axios'
import Navigationbar from './Parts/NavigationInfo'
import $ from 'jquery';
import Imglogo from '../../assets/images/iconup.png';

function UploadYourStartup (){
    const [picture, setPicture] = useState(null);
    const [pdf, setPdf] = useState(null)
    const [imgData, setImgData] = useState(null);
    const [redirect, setRedirect] = useState(false)

    const id = useSelector(state => state.Auth._id)
    console.log(id)
    useEffect(() => {
         // custom upload
         $('.uploadBtn').change(function(){
            // $(this).parent().next().next().children().val($(this).val());
            var valupload = $(this).val();
            document.getElementById("file-upload-logo-info1").innerHTML = valupload;
            $("#file-upload-logo-info1").show();
            $(".hide-when-active1").hide();
        });

        // custom upload
        $('.uploadBtn2').change(function(){
            // $(this).parent().next().next().children().val($(this).val());
            var valupload2 = $(this).val();
            document.getElementById("file-upload-logo-info2").innerHTML = valupload2;
            $("#file-upload-logo-info2").show();
            $(".hide-when-active2").hide();
        });
    }, [])

    const onChangePdf = e => {
        if (e.target.files[0]) {
            console.log("pdf: ", e.target.files);
            setPdf(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setPdf(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const onChangeMockUp = e => {
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

    const handleClick = async () => {
        let data = new FormData();
        data.append("id", id)
        data.append("image", picture)
        data.append("image", pdf)

        await axios.put(`${process.env.REACT_APP_BASE_URL}/users/registerStartup`, 
            data
        ).then((res) => {
            console.log(res.data)
            setRedirect(true)
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <div>
            {redirect ? <Redirect to="/PersonalInformation1" /> : null}
            <div className="all-wrap-regist-platform">
                <div className="wrap-regist-platform-page">
                    <Navigationbar Navigationactive="navigation1"></Navigationbar>
                    <div className="wrap-regis-form-c">
                        {/* <!-- regist form content --> */}
                        <h2 className="head-title-regist-platform-c">
                            Upload Your Startup <span>(optional)</span>
                        </h2>
                        <div className="f-regist1">
                            <div className="wrap-upload-pitch-mockup">
                                {/* <!-- item --> */}
                                <div className="item-upload-logo-pitch item-upload-logo-pitch1">
                                    <h3 className="title-upload-pitch-doc">
                                        Pitch Deck
                                    </h3>
                                    <div className="upload-logo-pitch">
                                        <div className="cus-file-upload-signup">
                                            <div className="fileUpload">
                                                <input onChange={onChangePdf} type="file" name="doc1" className="upload uploadBtn" accept=".pdf,.PDF"/>
                                            </div>
                                            <div className="img-icon-upload-p">
                                                <img src={Imglogo} alt=""/>
                                            </div>
                                            <div className="custom-val-lg">
                                                <span id="file-upload-logo-info1"></span>
                                                <span className="hide-when-active1">
                                                    Drag your Pitch Deck here<br/> or <span className="c-red">browse</span>
                                                    <span className="file-req-up-logo">
                                                        (file : .PDF)
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                    <label for="doc1" generated="true" className="error custom-f-regist"></label>
                                </div>
                                {/* <!-- item --> */}
                                <div className="item-upload-logo-pitch item-upload-logo-pitch2">
                                    <h3 className="title-upload-pitch-doc">
                                        UI/UX Mockup
                                    </h3>
                                    <div className="upload-logo-pitch">
                                        <div className="cus-file-upload-signup">
                                            <div className="fileUpload">
                                                <input onChange={onChangeMockUp} type="file" name="doc2" className="upload uploadBtn2" accept=".png,.PNG"/>
                                            </div>
                                            <div className="img-icon-upload-p">
                                                <img src={imgData ? imgData : Imglogo} alt=""/>
                                            </div>
                                            <div className="custom-val-lg">
                                                <span id="file-upload-logo-info2"></span>
                                                <span className="hide-when-active2">
                                                    Drag your UI/UX Mockup here<br/> or <span className="c-red">browse</span>
                                                    <span className="file-req-up-logo">
                                                        (file : .PNG)
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                    <label for="doc2" generated="true" className="error custom-f-regist"></label>
                                </div>
                                {/* <!-- item --> */}
                                <div className="item-input-f-regist1">
                                    <div className="input-f-regst-c2">
                                        <Link to="/PersonalInformation1" className="bt-regist-up-skip">Skip</Link>
                                        <input onClick={() => {handleClick()}} type="submit" value="Next" className="bt-next-submit-reg"/>
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
export default UploadYourStartup