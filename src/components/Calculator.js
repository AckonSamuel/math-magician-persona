import React from "react";
import integer from './integer';
import './calculator.css';

const integers = integer();
class Calculator extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div class = "num"> {integers.map((num) => <div>{num}</div>)}</div>
    );
  }
}

export default Calculator;