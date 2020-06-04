import React, { Component } from "react";
import "./App.css";
import Child from "./child";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "fono",
    };
    console.log("constructor");
  }
  componentWillMount() {
    if (window.innerWidth < 500) {
      this.setState({ innerWidth: window.innerWidth });
    }
    console.log(" componentWillMount");
  }
  componentDidMount() {
    console.log(" componentDidmount");
  }
  componentWillReceiveProps() {
    console.log(" componentWillReceiveProps");
    //dont try to change any props in this  method here
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }
componentWillUpdate(){
  console.log("ComponentWillUpdate");
}
// componentDidUpdate(prevProps, prevState){
//   console.log(" componentWill update",prevProps)
//   console.log(" componentWill update", prevState)
// }
componentWillUnmount(){
  console.log("componentWillUnmount");
}
  changeState() {
    this.setState({
      name: "batisseur Fono",
    });
  }
   unmounChild(){
    this.setState({name:"robert"})
  }


  render() {
    console.log("render");
    if (this.state.name ==="robert"){
      return (<div/>)
    }
    return (
      <div className="App">
        name:{this.state.name} <br />
        innerWidth: {this.state.innerWidth}
        <Child name={this.state.name} />
        <button onClick={this.changeState.bind(this)}>changeState</button>
        <button onClick = {this.unmounChild.bind(this)}>Unmount Child</button>
      </div>
    );
  }
}
export default App;
