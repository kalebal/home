import React, { useRef } from 'react'
import './App.css';
import Header from './Header';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import LinkTwig from './LinkTwig';

function App() {
  const refs = {
    aboutRef: useRef(null),
    expRef: useRef(null),
    contactRef: useRef(null),
  }

  const executeScroll = (ref) => refs[ref].current.scrollIntoView();

  return (
    <div className="App">
      <div id="nav">
        <ul className="nav-ul">
          <li className="nav-li">
            <button
            onClick={() => executeScroll("aboutRef")}>
              01. About
            </button></li>
          <li className="nav-li">
            <button
            onClick={() => executeScroll("expRef")}>
              02. Experience
            </button></li>
          <li className="nav-li">
            <button
            onClick={() => executeScroll("expRef")}>
              03. Contact
            </button></li>
          <li className="nav-li"> Resume </li>
        </ul>
      </div>
      <Header contactRef={refs.contactRef}/>
      <About refProp={refs.aboutRef}/>
      <Experience refProp={refs.expRef}/>
      <Contact refProp={refs.contactRef}/>
      <LinkTwig />
    </div>
  );
}

export default App;
