import React, { Component } from 'react';
import Review from './review'
import Cast from './Cast'
class Movie extends Component {
    srate = {liked : false};
    render() {
      return (
        <div>
            <h2>{this.props.movie.title}</h2>
            <img src={this.props.movie.poster}/>
            <br/>
            Rating: <strong>{this.props.movie.rating}</strong>
            <p>
              {this.props.movie.description}
            </p>
            <Review/>
            
        </div>
        
      );
    }
}

export default Movie;