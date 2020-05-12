import React from 'react';
import Board from './Board';
import newMove from '../move';
import NewGame from './NewGame';

class Game extends React.Component {
    state = {
      values: Array.from(Array(4), () => [null,null,null,null]),
      move: this.props.value,
    }  

    componentDidMount(){
      this.addTwo();
    }
    

    didWin(){
      if(this.state.values.some(row => row.includes(2048))){
        alert("Congradulations! You Won!")
      }
    }

    //just checks if board is full
    didLose(){
      if(!this.state.values.some(row => row.includes(null))){
          alert("Game Over!")
      }
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

    componentDidUpdate(prevProps){
      if(this.props !== prevProps)
      {
        const ret = newMove(this.state.values, this.props.value); 

        //why isnt this code necessary in order for it to work?
        let trying = this.state.values.slice();
        for(let i = 0; i< 4;i++){
          for(let j = 0; j< 4;j++){
            if(trying[i][j] !== ret[i][j]){
              trying[i][j] = ret[i][j];
            }
          }
        }



        const final = [...this.state.values, ...ret]
      

        this.setState({
          values: final,
        })
        this.didWin();
        this.addTwo() ;    
      }
    }

    handleNewGame(){
      console.log("Ere")
      debugger;
      const vals = this.state.values.slice();
      vals = Array.from(Array(4), () => [null,null,null,null]);
        this.setState({
          values: vals,
        })
    }

    render() {
      console.log('in render');
     
      return (
        <div className="game">
          <div className="game-board" >
            <Board value={this.state.values}></Board>
          </div>
          <div>
            <NewGame onClick={this.handleNewGame}/>
          </div>
        </div>
      );
    }
}


export default Game;


  