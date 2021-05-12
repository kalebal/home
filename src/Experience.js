import React, { useState } from 'react';
const projects = require('./lib/projects.json');

export default function Experience({ refProp }) {
  const projectData = JSON.stringify(projects);
  console.log(projectData);
  return(
    <section id="exp" ref={refProp}>
      <h2> 0.2 Some Things I've Done </h2>
      <div className="exp-container">
        <ul className="exp-ul">
          <li className="exp-li">
          <a href="https://github.com/kalebal/catwalk">Catwalk</a>
          </li>
          <li className="exp-li">
            <a href="https://github.com/kalebal/Q-A">Atelier</a>
          </li>
          <li className="exp-li"><a href="https://github.com/kalebal/parkPack">Park Pack</a></li>
          <li className="exp-li"><a href="https://devpost.com/software/fitfriends-0ohz73">Park Pack</a></li>
        </ul>

      </div>
    </section>
  );
}


/*
<Collapse collapsed={false} name="Catwalk">
            <ProjectCard />
          </Collapse>
*/
function ProjectCard() {
  const [isModal, setModal] = React.useState(false);
  return (
    <div className="project-card">
      <div className="project-card-text">
        <ul>
          <li>Doloremque impedit unde.</li>
          <li> Sit veniam reprehenderit quis quas aut ullam voluptatum laborum et. Quis totam ut explicabo sed.</li>
          <li>Doloremque impedit unde reprehenderit quis quas aut ullam volupta.</li>
        </ul>
      </div>
      <div className="project-img">
        <img src="http://placeimg.com/640/480/abstract" alt="" onClick={() => setModal(true)}></img>
        <Modal isVisible={isModal}
        title="Modal Title"
        content={<img src="https://i.imgur.com/kVpvEhN.png" alt=""></img>}
        onClose={() => setModal(false)}
      />
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

function Modal({ isVisible = false, title, content, footer, onClose }) {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  return !isVisible ? null : (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-content">{content}</div>
        </div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
};