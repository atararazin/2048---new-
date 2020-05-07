import React from 'react';
import Board from './Board';
import newMove from '../move';

class Game extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        values: Array.from(Array(4), () => [null,null,null,null]),
        move: this.props.value,
      }
      console.log("before", this.state.values);
      this.addTwo();       
    }


    addTwo(){
      const rand = () => Math.floor(Math.random() * 4);

      const vals = this.state.values.slice();
      let row, col;
      while(vals[row = rand()][col = rand()]);
      vals[row][col] = 2;
      this.setState({
        values: vals,
      })
    }

    componentDidUpdate(){
      console.log("updated");
      const retVal = newMove(this.state.values,this.state.move);
      console.log(retVal);
      //this.addTwo();

    }

    render() {
      console.log('in render');
      //const retVal = newMove(this.state.values,this.state.move);
      //console.log(retVal);
     
      return (
        <div className="game">
          <div className="game-board">
            <Board value={this.state.values}>
            </Board>
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }


export default Game;


  