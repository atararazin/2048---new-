import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Components/Game';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      key: '',
    }
    this.keyDownTextField = this.keyDownTextField.bind(this);
    document.addEventListener("keydown", this.keyDownTextField, false)
  }


  keyDownTextField(e) {
    const keys = ['ArrowLeft', 'ArrowRight','ArrowUp','ArrowDown']; 
    if(keys.includes(e.key)){
      this.setState({
        key: e.key
      })
      }
    }
 
  render(){
    return <Game value={this.state.key}/>
  }

}

ReactDOM.render(<App/>, document.getElementById("root"));


  
