import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menutop from '../../components/Menutop';
import Getconnect from '../../components/Getconnect';
import Header from '../../components/Pitchdeck/Header';
import Section1 from '../../components/Pitchdeck/Section1';
import Section2 from '../../components/Pitchdeck/Section2';

function Perks() {
  return (
    <div>
      <Menutop PmenuStyle="menu2"></Menutop>
      <Header></Header>
      <Section1></Section1>
      <Section2></Section2>
      
      <Getconnect></Getconnect>
    </div>
  );
}

export default Perks;
