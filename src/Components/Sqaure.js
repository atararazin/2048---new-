import React from 'react';
import { Rectangle } from 'draw-shape-reactjs';


class Square extends React.Component {
    render() {
      return (
        <Rectangle corner={[this.props.x, this.props.y]} height={100} width={100} key={[this.props.x, this.props.y]}>
        </Rectangle>
      )
    }
  }

export default Square;