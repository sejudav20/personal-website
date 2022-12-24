
import React from 'react';
import { Bio, Resume, Skills, Work, Classes, Projects } from './Content'

import './App.css';
import CardContainer from './CardContainer';
import ContactBar from './ContactBar';
import NavBar from './NavBar';
import TitleBar from './TitleBar';

// Handles main page of the app and puts all the components together

function App() {
  return (
    <div >
      <TitleBar></TitleBar>
      <NavBar></NavBar>
      <div id="scrollable" data-spy="scroll" data-target=".navbar" data-offset="50" >
        <div id="bio" ><CardContainer title="Bio" body={<>{Bio()}</>}></CardContainer></div>
        <div id="resume" ><CardContainer title="Resume" body={<>{Resume()}</>}></CardContainer></div>
        <div id="skills" ><CardContainer title="Skills" body={<>{Skills()}</>}></CardContainer></div>
        <div id="work" ><CardContainer title="Work Experience" body={<>{Work()}</>}></CardContainer></div>
        <div id="classes" ><CardContainer title="Classes" body={<>{Classes()}</>}></CardContainer></div>
        <div id="project" ><CardContainer title="Projects" body={<>{Projects()}</>}></CardContainer></div>
        <div id="contact" ><ContactBar></ContactBar></div>
      </div>
    </div>
  );
}

export default App;
