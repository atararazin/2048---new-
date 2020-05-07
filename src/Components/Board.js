import React from 'react';
import Square from './Sqaure';

class Board extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        board: this.props.value
      }
    }

    renderRow(i) {
      const sqaures = []
      for(let j = 0; j < 4; j++){
        sqaures.push(<Square value={this.state.board[i][j]} key={(i,j)}/>)
      }
      return (
        <div className="board-row">
          {sqaures}
        </div>
      )
    }
  
    render() {
      return (
        <div>
          {this.renderRow(0)}
          {this.renderRow(1)}
          {this.renderRow(2)}
          {this.renderRow(3)}
        </div>
      )};
}
export default Board;