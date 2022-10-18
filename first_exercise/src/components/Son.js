function Son (props) {
  const {idSon, exeParent} = props;

  return (
  <div>
  <h2> Events Parent - Son {idSon}</h2>
  <button type="button" onClick={() => exeParent("I'm the son: " + idSon)}>Call Parent</button>
  </div>);
}

export default Son;