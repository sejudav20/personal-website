import React from 'react';


import './App.css';
import CardContainer from './CardContainer';
import ContactBar from './ContactBar';
import NavBar from './NavBar';
import TitleBar from './TitleBar';
// Handles main page of the app and puts all components together

function App() {
  return (

    <>
      <TitleBar></TitleBar>
      <NavBar></NavBar>
      <CardContainer title="Bio" body={<>Hello World</>}></CardContainer>
      <CardContainer title="Skills" body={<>Hello World</>}></CardContainer>
      <CardContainer title="Work Experience" body={<>Hello World</>}></CardContainer>
      <CardContainer title="Classes" body={<>Hello World</>}></CardContainer>
      <CardContainer title="Extracuriculars" body={<>Hello World</>}></CardContainer>
      <ContactBar></ContactBar>
    </>
  );
}

export default App;
