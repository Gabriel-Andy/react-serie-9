import React, { Component } from "react";
import "./App.css";

class Child extends Component {
    //this is our initial state
  constructor() {
    super();
    console.log(" child constructor");
  }
  componentWillMount() {
    console.log(" child componentWillMount");
  }
  componentDidMount() {
    console.log(" child componentDidmount");
  }
  //these methods are  used when you update the component the component
  componentWillReceiveProps() {
    console.log(" child componentWillReceiveProps");
    //dont try to change any state here
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(" child shouldComponentUpdate");
    return true;
  }
  componentWillUpdate() {
    console.log(" child ComponentWillUpdate");
    // dont call setState here
    //this is exactly like the componentWillMount, it has props and state available to him
  }
//   componentDidUpdate(prevProps, prevState) {
//     console.log("child componentWill update", PrevProps);
//     console.log("child componentWill update", PrevState);
//     // this is used when you have a third party UI element
//   }
  //this method is used when you destroy the component
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

  render() {
    console.log(" child render");
    return <div className="App">child name:{this.props.name}</div>;
  }
}
export default Child;
