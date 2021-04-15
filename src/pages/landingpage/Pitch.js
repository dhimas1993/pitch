import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menutop from '../../components/Menutop';
import Getconnect from '../../components/Getconnect';
import Header from '../../components/Pitch/Header';
import Section1 from '../../components/Pitch/Section1';
import Section2 from '../../components/Pitch/Section2';
import Section3 from '../../components/Pitch/Section3';
import Section4 from '../../components/Pitch/Section4';
import Section5 from '../../components/Pitch/Section5';
import Section6 from '../../components/Pitch/Section6';

function Pitch() {
  return (
    <div>
      <Menutop PmenuStyle="menu2"></Menutop>
      <Header></Header>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Getconnect></Getconnect>
    </div>
  );
}

export default Pitch;
