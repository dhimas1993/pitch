import React from 'react'
import HearAboutUs from '../../components/Register/HearAboutUs';
import LinkArrowUp from '../../components/Register/Parts/LinkArrowUp';
import LinkArrowDown from '../../components/Register/Parts/LinkArrowDown';

function PersonalInformation2() {
  return (
    <div>
      <HearAboutUs></HearAboutUs>
      <div className="wrap-nav-prev-next-regist">
        <LinkArrowUp linkprev="PersonalInformation1"></LinkArrowUp>
        <LinkArrowDown linknext="CheckoutPage"></LinkArrowDown>
      </div>
    </div>
  );
}

export default PersonalInformation2;
