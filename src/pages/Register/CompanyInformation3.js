import React from 'react'
import YourStartupLocated from '../../components/Register/YourStartupLocated';
import LinkArrowUp from '../../components/Register/Parts/LinkArrowUp';
import LinkArrowDown from '../../components/Register/Parts/LinkArrowDown';

function CompanyInformation3() {
  return (
    <div>
      <YourStartupLocated></YourStartupLocated>
      <div className="wrap-nav-prev-next-regist">
        <LinkArrowUp linkprev="CompanyInformation2"></LinkArrowUp>
        <LinkArrowDown linknext="CompanyInformation4"></LinkArrowDown>
      </div>
    </div>
  );
}

export default CompanyInformation3;
