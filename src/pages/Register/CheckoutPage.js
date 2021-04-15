import React from 'react'
import ChoosePlan from '../../components/Register/ChoosePlan';
import LinkArrowUp from '../../components/Register/Parts/LinkArrowUp';
import LinkArrowDown from '../../components/Register/Parts/LinkArrowDown';

function CheckoutPage() {
  return (
    <div>
      <ChoosePlan></ChoosePlan>
      <div className="wrap-nav-prev-next-regist">
        <LinkArrowUp linkprev="PersonalInformation2"></LinkArrowUp>
        <LinkArrowDown linknext="FinishRegister"></LinkArrowDown>
      </div>
    </div>
  );
}

export default CheckoutPage;
