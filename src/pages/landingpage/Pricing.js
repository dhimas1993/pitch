import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Menutop from '../../components/Menutop';
import PricingTab from '../../components/Pricing/PricingTab';
import Getconnect from '../../components/Getconnect';
import Testimonials from '../../components/Pricing/Testimonials';
import Faq from '../../components/Pricing/Faq';

function Pricing() {
  return (
    <div>
      <Menutop PmenuStyle="menu2"></Menutop>
      <PricingTab></PricingTab>
      <Testimonials></Testimonials>
      <Faq></Faq>
      <Getconnect></Getconnect>
    </div>
  );
}

export default Pricing;
