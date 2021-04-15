import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Menutop from '../../components/Menutop';
import Header from '../../components/Home/Header';
import Feature from '../../components/Home/Feature';
import Detailbarmenu from '../../components/Home/Detailbarmenu';
import Infobarcolumn from '../../components/Home/Infobarcolumn';
import Testimonials from '../../components/Home/Testimonials';
import Vcnetwork from '../../components/Home/Vcnetwork';
import Getconnect from '../../components/Getconnect';

function Homepage() {
  return (
    <div>
      <Menutop PmenuStyle="menu1"></Menutop>
      <Header></Header>
      <Feature></Feature>
      <Detailbarmenu></Detailbarmenu>
      <Infobarcolumn></Infobarcolumn>
      <Testimonials></Testimonials>
      <Vcnetwork></Vcnetwork>
      <Getconnect></Getconnect>
    </div>
  );
}

export default Homepage;
