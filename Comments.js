import React, {Component} from 'react';
import '../App.css';


class Comments extends Component  {
  render () {
    return this.props.Comments.map((comment) => (
        <div className = "comment">
            <img src = {this.props.ava} alt="avatar"/>
            <p>{comment}</p>
            
        </div>
    ));
  }
}
export default Comments;