import React, {Component} from 'react';
import Board from './Board';
import newMove from '../move';
import NewGame from './NewGame';
import Undo from './Undo';

class Game extends Component {
   constructor(props){
     super(props);
     this.state = {
      values: [[null, null, null, null],
               [null, null, null, null],
               [null, null, null, null],
               [null, null, null, null]],
      prevValues: [[null, null, null, null],
                   [null, null, null, null],
                   [null, null, null, null],
                   [null, null, null, null]],
      move: this.props.value,
      
    }  
    this.addTwo = this.addTwo.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
   }  
  
    componentDidMount(){
      this.addTwo();
    }

    componentDidUpdate(prevProps){
      if(this.props !== prevProps)
      {
        const prev= [];
        this.state.values.slice().forEach(element => {
          prev.push(element.slice())
        });

        this.setState({
          prevValues: prev,
        })
        
        const ret = newMove(this.state.values, this.props.value); 


        //why is this code necessary in order for it to work?
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
        this.addTwo();   
        this.didWin(); 
      }
    }

    render() {
      return (
          <div>
          <div>
            <Board value={this.state.values}></Board>
          </div>
          <div className="buttons">
            <NewGame onClick={this.handleNewGame}/>
            <Undo onClick={this.handleUndo}/>
          </div>
         </div>
      );
    }

    

    didWin(){
      if(this.state.values.some(row => row.includes(2048))){
        alert("congratulations! You Won!")
      }
    }

    //just checks if board is full
    didLose(){
      if(!this.state.values.some(row => row.includes(null))){
          alert("Game Over!")
      }
      //now check if there are any numbers that can be merged
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

    
    handleNewGame(){
      let vals = Array.from(Array(4), () => [null,null,null,null]);
      this.setState({
        values: vals,
      })
    }

    handleUndo(){
      const prev = [];
      this.state.prevValues.slice().forEach(element => {
          prev.push(element.slice())
        });
        
      this.setState({
        values: prev,
      })
    }

    
}


export default Game;


  