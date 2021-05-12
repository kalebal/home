import React, { useState } from 'react';

export default function Experience({ refProp }) {
  return(
    <section id="exp" ref={refProp}>
      <h2> 0.2 Some Things I've Done </h2>
      <div className="exp-container">
        <ul className="exp-ul">
          <li className="exp-li">
          <Collapse collapsed={false} name="Catwalk">
            <ProjectCard />
          </Collapse>
          </li>
          <li className="exp-li">
          <Collapse name="Atelier">
            <ProjectCard />
          </Collapse>
          </li>
          <li className="exp-li"> Park Pack </li>
          <li className="exp-li"> Fit Friends </li>
        </ul>

      </div>
    </section>
  );
}

function ProjectCard() {
  return (
    <div className="project-card">
      <div className="project-card-text">
        <p>2021</p>
        <h3>Name</h3>
        <ul>
          <li>Doloremque impedit unde.</li>
          <li> Sit veniam reprehenderit quis quas aut ullam voluptatum laborum et. Quis totam ut explicabo sed.</li>
          <li>Doloremque impedit unde reprehenderit quis quas aut ullam volupta.</li>
        </ul>
      </div>
      <div className="project-img">
        <img src="http://placeimg.com/640/480/abstract" alt=""></img>
      </div>
    </div>
  );
};

const Collapse = ({ name, collapsed = true, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  return (
    <>
      <button
        className="collapse-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {name}
      </button>
      <div
        className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </>
  );
};