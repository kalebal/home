export default function About({ refProp }) {
  return(
    <section id="about">
      <div id="about-text" ref={refProp}>
        <h2> 0.1 About Me </h2>
        <p>
          Hello! My name is Kaleb Lyda and I enjoy creating beautiful things. My interest in software engineering started in 2018 when I used a Java library called Processing to make sketches for art projects.
          <br />
          Now I’m using my background in art to think outside the box when crafting exciting experiences that live on the web.
          <br />
          Here’s a few technologies I’ve been using recently:
        </p>
        <ul className="about-ul">
          <li className="about-li"> Javascript </li>
          <li className="about-li"> React</li>
          <li className="about-li"> Node.js </li>
          <li className="about-li"> Typescript </li>
          <li className="about-li"> Java </li>
        </ul>
      </div>
      <div className="photo-container">
        <img id="profile-picture" alt="" src="http://placeimg.com/640/480/people" />
      </div>
    </section>
  );
}
