import React from 'react'
import YourProfile from '../../components/Register/YourProfile';
import LinkArrowUp from '../../components/Register/Parts/LinkArrowUp';
import LinkArrowDown from '../../components/Register/Parts/LinkArrowDown';

function PersonalInformation1() {
  return (
    <div>
      <YourProfile></YourProfile>
      <div className="wrap-nav-prev-next-regist">
        <LinkArrowUp linkprev="CompanyInformation5"></LinkArrowUp>
        <LinkArrowDown linknext="PersonalInformation2"></LinkArrowDown>
      </div>
    </div>
  );
}

export default PersonalInformation1;
