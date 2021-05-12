
export default function Header({ contactRef }) {
  const scroll = (ref) => contactRef.current.scrollIntoView();
  return (
    <header>
      <div id="intro">
        <p> Hi, my name is</p>
        <h1>Kaleb Lyda</h1>
        <p>I build things for the web. </p>
        <p>I’m a software engineer based in the Greensboro, NC area who specializes in building (and sometimes designing) engaging user experiences.
        </p>
        <button className="primary-button" onClick={scroll}> Get in touch </button>
      </div>
    </header>
  );
}

