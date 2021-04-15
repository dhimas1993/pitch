import React from 'react'
import StageOfYourStartup from '../../components/Register/StageOfYourStartup';
import LinkArrowUp from '../../components/Register/Parts/LinkArrowUp';
import LinkArrowDown from '../../components/Register/Parts/LinkArrowDown';

function CompanyInformation4() {
  return (
    <div>
      <StageOfYourStartup></StageOfYourStartup>
      <div className="wrap-nav-prev-next-regist">
        <LinkArrowUp linkprev="CompanyInformation3"></LinkArrowUp>
        <LinkArrowDown linknext="CompanyInformation5"></LinkArrowDown>
      </div>
    </div>
  );
}

export default CompanyInformation4;
