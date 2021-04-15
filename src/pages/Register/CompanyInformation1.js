import React from 'react'
import YourStartupBrand from '../../components/Register/YourStartupBrand';
import LinkArrowDown from '../../components/Register/Parts/LinkArrowDown';

function CompanyInformation1() {
  return (
    <div>
      <YourStartupBrand></YourStartupBrand>
      <div className="wrap-nav-prev-next-regist">
        <LinkArrowDown linknext="CompanyInformation2"></LinkArrowDown>
      </div>
    </div>
  );
}

export default CompanyInformation1;
