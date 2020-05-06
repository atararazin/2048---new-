import React from 'react';
import Board from './Board';
class Game extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        move: this.props.value
      }
      console.log(this.state.move);

    }

    render() {
      
      console.log(this.state.move);
      return (
        <div className="game">
          <div className="game-board">
            <Board value={this.props.value}>
              {() => console.log(this.props.value)}
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


  