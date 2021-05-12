import React, { useState, useEffect } from 'react';

export default function Experience({ refProp }) {
  const [projectData, setProjectData] = useState("");

  // fetches local JSON data (in public folder)
  useEffect(() => {
    fetch('projects.json', {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }}).then((res) => {
      return res.json();
    })
    .then((data) => {
      setProjectData(data);
    })
    .catch((err) => {
      setProjectData(null);
    });
  }, []);

  if (projectData) {
    return(
      <section id="exp" ref={refProp}>
        <h2> 0.2 Some Things I've Done </h2>
        <div className="exp-container">
          <ul className="exp-ul">
              {projectData.map((proj) => {
                return (
                  <li key={proj.name} className="exp-li">
                    <Collapse
                    name={proj.name}>
                     <ProjectCard
                        description={proj.description}
                        link={proj.link}
                        imgs={proj.imgs} />
                    </Collapse>
                  </li>
                  );
              })}

          </ul>

        </div>
      </section>
    );
  } else {
    return (
      <section id="exp" ref={refProp}>
        <h2> 0.2 Some Things I've Done </h2>
        <div className="exp-container">
          <p> Sorry, seems like there's an issue loading my project data. They're still up on Github though!</p>
        </div>
      </section>
    );
  }
}

function ProjectCard({name, description, imgs, link}) {
  imgs = JSON.parse(imgs);
  return (
    <div className="project-card">
      <div className="project-card-text">
          <p> {description}</p>
           <button className="primary-button">
           <a href={link}>Check it out </a></button>
      </div>
      {imgs[0] && <img className="project-img" src={imgs[0]} alt="" />}

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
