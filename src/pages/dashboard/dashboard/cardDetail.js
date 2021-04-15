import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default function CardDetail(data){
  const {_id, body, name, label, portofolioLogo, file} = data.item
  // console.log('label', data.item)
  return (
    <div className="item-box-vc-investor-c">
      <div className="item-box-vc-investor-c-in">
        <div className="i-box-vc-icon-info">
          <div className="i-box-vc-icon-info-img">
            <img src={`${process.env.REACT_APP_URL}${file}`} alt="" />
          </div>
          <div className="i-box-vc-icon-info-desc">
            <h4>{name}</h4>
            <h5>{ReactHtmlParser(body)}</h5>
          </div>
          <div className="clear" />
        </div>
        <div className="meta-tag-i-box-vc-icon-info">
          {
              label.map((items) => {
                return (
                  <a href="#">{items}</a>
                )
              })
          }
        </div>
        <div className="portofolio-vc-logo-i">
          <h4>Portofolio</h4>
          <div className="logo-vc-port">
            {
              portofolioLogo.map((item) => {
                return (
                  <div className="i-logo-vc-port">
                    <img src={`${process.env.REACT_APP_URL}${item}`} alt="" />
                  </div>
                )
              })
            }
            
          </div>
        </div>
        <div className="wrap-button-cta-top-vc">
          <a href="#" className="bt-follow-top-vc">Follow</a>
          <Link to={`/Dashboard-Detail-Pitch/${_id}`}>
            <a href="#" className="bt-learnmore-top-vc">Learn More</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
