import React from 'react'
import CategoryIndustry from '../../components/Register/CategoryIndustry';
import LinkArrowUp from '../../components/Register/Parts/LinkArrowUp';
import LinkArrowDown from '../../components/Register/Parts/LinkArrowDown';

function CompanyInformation2() {
  return (
    <div>
      <CategoryIndustry></CategoryIndustry>
      <div className="wrap-nav-prev-next-regist">
        <LinkArrowUp linkprev="CompanyInformation1"></LinkArrowUp>
        <LinkArrowDown linknext="CompanyInformation3"></LinkArrowDown>
      </div>
    </div>
  );
}

export default CompanyInformation2;
