
import React from 'react';


import './App.css';
import CardContainer from './CardContainer';
import ContactBar from './ContactBar';
import NavBar from './NavBar';
import TitleBar from './TitleBar';
// Handles main page of the app and puts all components together

function App() {
  return (
    
    <div >
      <TitleBar></TitleBar>
      <NavBar></NavBar>
      <div  id="scrollable"  data-spy="scroll" data-target=".navbar" data-offset="50" >
      <div id="bio" ><CardContainer title="Bio" body={<>Hello World</>}></CardContainer></div>
      <div id="skills" ><CardContainer  title="Skills" body={<>Hello World</>}></CardContainer></div>
      <div id="work" ><CardContainer  title="Work Experience" body={<>Hello World</>}></CardContainer></div>
      <div id="classes" ><CardContainer  title="Classes" body={<>Hello World</>}></CardContainer></div>
      <div id="project" ><CardContainer  title="Projects" body={<>Hello World</>}></CardContainer></div>
      <div id="fun" ><CardContainer title="Extracuriculars" body={<>Hello World</>}></CardContainer></div>
      <div id="contact" ><ContactBar></ContactBar></div>
      </div>
    </div>
 
  
   
  );
}

export default App;
