import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menutop from '../../components/Menutop';
import Getconnect from '../../components/Getconnect';
import Header from '../../components/Community/Header';
import Section from '../../components/Community/Section';

function Community() {
  return (
    <div>
      <Menutop PmenuStyle="menu2"></Menutop>
      <Header></Header>
      <Section></Section>
      <Getconnect></Getconnect>
    </div>
  );
}

export default Community;
