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

  //Scrolls down to specific section, ID'd by ref object
  const executeScroll = (ref) => refs[ref].current.scrollIntoView({behavior: "smooth", block: "center"});

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
            onClick={() => executeScroll("contactRef")}>
              03. Contact
            </button></li>
          <li className="nav-li">
            <a href="https://github.com/kalebal/home/blob/eb88cbe66324d927e5fefedbf3df3cc045c12190/src/lib/resume.pdf"
            className="primary-button"
            rel="noreferrer"
            target="_blank"
            type="application/pdf">
              Resume
            </a></li>
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
