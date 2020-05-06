import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Components/Game';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      move: '',
    }
  }
  render(){
    return <Game value={this.state.move}/>
  }
}

ReactDOM.render(<App />, document.getElementById("root"), document.addEventListener("keydown", keyDownTextField, false));
/*
let move = 'initial';
  ReactDOM.render(
    <Game value={move}/>,
    document.getElementById('root'),
    document.addEventListener("keydown", keyDownTextField, false)
   
  );
*/
  function keyDownTextField(e) {
    const keys = ['ArrowLeft', 'ArrowRight','ArrowUp','ArrowDown']; 
    if(keys.includes(e.key)){
      alert("pass to child");
      //this.state.move = e.key
      }
    }
  