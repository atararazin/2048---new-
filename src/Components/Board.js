import React from 'react';
import '../styles/flexStyle.css'
import colorsArray from '../util/Colors'

class Board extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        board: this.props.value
      }
    }

    
    componentDidUpdate(prevProps){
      if(this.props !== prevProps){
        console.log("changed value of the board");
        this.setState({
          board: this.props.value
        })

      }
    }

    renderBoard(){
      const board = []
      for(let i = 0; i < 4; i++){
        board.push(this.renderRow(i));
      }
      return board;
    }

    renderRow(i) {
      const sqaures = []
      for(let j = 0; j < 4; j++){
      sqaures.push(<li class="flex-item" style={{backgroundColor: colorsArray[this.state.board[i][j]]}}>{this.state.board[i][j]}</li>);
      }
      return (
        <ul className="flex-container">
          {sqaures}
        </ul>
      )
    }
  
      render() {
      return (
        <div>
          {this.renderBoard()}
        </div>
        
      )};
}
export default Board;