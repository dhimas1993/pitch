import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menutop from '../../components/Menutop';
import Getconnect from '../../components/Getconnect';
import Header from '../../components/Perks/Header';
import Section from '../../components/Perks/Section';

function Perks() {
  return (
    <div>
      <Menutop PmenuStyle="menu2"></Menutop>
      <Header></Header>
      <Section></Section>
      <Getconnect></Getconnect>
    </div>
  );
}

export default Perks;
