export default function Experience({ refProp }) {
  return(
    <section ref={refProp}>
      <h2> 0.2 Some Things I've Done </h2>
      <ul className="exp-ul">
        <li className="exp-li"> Catwalk </li>
        <li className="exp-li"> Atelier</li>
        <li className="exp-li"> Park Pack </li>
        <li className="exp-li"> Fit Friends </li>
      </ul>
    </section>
  );
}