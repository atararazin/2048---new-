import React, {Component} from 'react';
import '../styles/boardStyle.css'
import colorsArray from '../util/Colors'

class Board extends Component {
    constructor(props){
      super(props);
      this.state = {
        board: this.props.value
      }
    }

    
    componentDidUpdate(prevProps){
      if(this.props !== prevProps){
        this.setState({
          board: this.props.value
        })

      }
    }
  

      renderBoard(){
        const sqaures = []
        for(let i = 0; i < 4; i++){
          for(let j = 0; j < 4; j++){
            sqaures.push(<div class="box" style={{backgroundColor: colorsArray[this.state.board[i][j]]}}>{this.state.board[i][j]}</div>);
            }
        }
        return sqaures

      }

      
      render() {
        return (
          <div className="game-board">
              {this.renderBoard()}      
          </div>
          
        )};

      
}
export default Board;