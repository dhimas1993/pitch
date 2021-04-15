import React from 'react'
import UploadYourStartup from '../../components/Register/UploadYourStartup';
import LinkArrowUp from '../../components/Register/Parts/LinkArrowUp';
import LinkArrowDown from '../../components/Register/Parts/LinkArrowDown';

function CompanyInformation5() {
  return (
    <div>
      <UploadYourStartup></UploadYourStartup>
      <div className="wrap-nav-prev-next-regist">
        <LinkArrowUp linkprev="CompanyInformation4"></LinkArrowUp>
        <LinkArrowDown linknext="PersonalInformation1"></LinkArrowDown>
      </div>
    </div>
  );
}

export default CompanyInformation5;
