import React, { useState, useEffect} from 'react';
import pdf from '../../../assets/images/pdf.png'

function PitcdeckItem(data){
    const [Item, setItem] = useState(data.item)
    
    return (
        <div className="item-box-pitchdeck-upload-file">
            <div className="item-box-pitchdeck-upload-file-in">
                <div className="img-thumbnail-pitchdeck-file">
                    <img data-pdf-thumbnail-file="text.pdf" data-pdf-thumbnail-width={400} src={pdf} />
                    <div className="hover-menu-thumbnail-pitchdeck">
                        <div className="item-cta-button-3-circle toogle-show-menu-3-bt">
                            <span className="circle-icon-cta-bt" />
                            <span className="circle-icon-cta-bt" />
                            <span className="circle-icon-cta-bt" />
                        </div>
                        <div className="hover-menu-thumbnail-pitchdeck-in">
                            {/* icon */}
                            <a href="javascript:void(0)" className="bt-cta-icon-menu-thumbnail-pitchdeck bt-show-slide-pitchdedck">
                                <span className="icon-thumb-pitchdeck-mn">
                                    <i className="fa fa-bar-chart" />
                                </span>
                                <span className="title-thumb-pitchdeck-mn">
                                    Track
                                </span>
                            </a>
                            {/* icon */}
                            <a href="mentor.html#mentorerwin" className="bt-cta-icon-menu-thumbnail-pitchdeck">
                                <span className="icon-thumb-pitchdeck-mn">
                                    <i className="fa fa-phone" />
                                </span>
                                <span className="title-thumb-pitchdeck-mn">
                                    Pitch Deck Consultation
                                </span>
                            </a>
                            {/* icon */}
                            <a href="javascript:void(0)" className="bt-cta-icon-menu-thumbnail-pitchdeck">
                                <span className="icon-thumb-pitchdeck-mn">
                                    <i className="fa fa-file-text-o" />
                                </span>
                                <span className="title-thumb-pitchdeck-mn">
                                    Pitch Deck Report
                                </span>
                            </a>
                            {/* icon */}
                            <a href="javascript:void(0)" className="bt-cta-icon-menu-thumbnail-pitchdeck">
                                <span className="icon-thumb-pitchdeck-mn">
                                    <i className="fa fa-eye" />
                                </span>
                                <span className="title-thumb-pitchdeck-mn">
                                    Curate Pitch Deck
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-detail-name-pdf-pitchdeck">
                    <img src="images/iconpdf.png" alt="" />
                        <span>{Item.name}</span>
                    <div className="clear" />
                    <a href="#" className="bt-feedback-available">
                        Feedback Available
                    </a>
                </div>
            </div>
            <div className="menu-show-button3-circle">
                <ul className="menu-bt-circle-3">
                    <li><a href="#">menu 1</a></li>
                    <li><a href="#">menu 1</a></li>
                    <li><a href="#">menu 1</a></li>
                    <li><a href="#">menu 1</a></li>
                    <li><a href="#">menu 1</a></li>
                </ul>
            </div>
        </div>
    )
}

export default PitcdeckItem