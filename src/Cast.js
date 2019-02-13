import React, { Component } from 'react';

class Cast extends Component {
    render() {
      const castMember = this.props.cast.map((member) => 
      <div>
        {member.name}
        {}
      </div>)
      return (
        <div>
          {castMember}
        </div>
        
      );
    }
}

export default Cast;