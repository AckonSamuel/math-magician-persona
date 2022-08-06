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
      <h1> {integers.join(', ')}</h1>
    );
  }
}

export default Calculator;