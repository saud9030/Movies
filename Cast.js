import React, { Component } from 'react';

class Cast extends Component {
    render() {
      const castMember = this.props.cast.map((member) => 
      <div>
        {this.props.cast.name}
      </div>)
      return (

      );
    }
}

export default Cast;