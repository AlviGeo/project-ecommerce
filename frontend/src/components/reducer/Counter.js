import React, { Component } from "react";
import styled from "styled-components";

class Counter extends Component {
  state = {
    count: 0,
  };

  IncreamentItem() {
    this.setState({ count: this.state.count + 1 });
  }
  DecreaseItem() {
    this.setState({ count: this.state.count - 1 });
    if (this.state.count <= 0) {
      window.alert("Can't Decreament");
      this.setState({ count: (this.state.count = 0) });
    }
  }
  reset() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div className="text-center">
        <DecrementCounterButton
          className="btn btn-danger btn-sm"
          onClick={() => this.DecreaseItem()}
        >
          -
        </DecrementCounterButton>
        <Input type="text" className="" value={this.state.count}></Input>
        <IncrementCounterButton
          className="btn btn-success btn-sm"
          onClick={() => this.IncreamentItem()}
        >
          +
        </IncrementCounterButton>
        <p />
        <Button className="reset" onClick={() => this.reset()}>
          Reset
        </Button>
        {/* <h1>Count {this.state.count}</h1> */}
      </div>
    );
  }
}
export default Counter;

const DecrementCounterButton = styled.button`
  text-align: center;
  width: 20px;
  height: auto;
`;
const IncrementCounterButton = styled.button`
  text-align: center;
  width: 20px;
  height: auto;
  padding-right: 5px;
`;
const Button = styled.button`
  background-color: #ff1493;
  margin-bottom: 1em;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
`;
const Input = styled.input`
  text-align: center;
  justify-content: space-between;
  width: 5em;
  margin-left: 1em;
  margin-right: 1em;
  font-size: 16px;
`;
