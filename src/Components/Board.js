import React from 'react';
import Square from './Sqaure';

class Board extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        values: Array.from(Array(4), () => [null,null,null,null])

      }
    }
    render() {
        return(
          <div>
            {this.createBoard()}
          </div>
        )
        
    }

    createBoard() {
        let pos_x=100, pos_y=100
        let sqs = []
    
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            sqs.push(<Square x={pos_x} y={pos_y} value={i} key={[i,j]}/>)
            pos_y += 100
          }
          pos_y = 100
          pos_x += 100
        }
        return sqs
      }
  }

  export default Board;