import React, {Component} from 'react';
import Post from './Post';
import '../App.css';


class Posts extends Component  {
  render () {
    return this.props.posts.map((post) =>(
        <Post post={post} markedLike = {this.props.markedLike} showCommentBox ={this.props.showCommentBox} addComment = {this.props.addComment}/>

    ));
  }
}
export default Posts;