function Maths (props) {
  const {number, tripleParent} = props;

  const doubleParent = () => {
    console.log(number*2);
  }

  return (
  <div>
  <button type="button" onClick={() => doubleParent()}>Double of {number}</button>&nbsp;&nbsp;
  <button type="button" onClick={() => tripleParent(number)}>Triple of {number}</button>
  </div>);
}

export default Maths;