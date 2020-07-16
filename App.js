import React, {Component} from 'react';
import './App.css';
import { LoremIpsum} from 'react-lorem-ipsum';
import Navbar from '../src/component/Navbar';
import Post from '../src/component/Post';
import Posts from '../src/component/Posts';
import  avatar from './img/avatar.jpg';
import  haavatar from './img/haavatar.jpg';
import  thangavatar from './img/thangavatar.jpg';

class App extends Component  {
  state = {
    Posts: [
      {
        id: 1,
        ava: thangavatar,
        username: 'Thang Le',
        content: <LoremIpsum p={1} />,
        liked: false,
        showComment: false,
        comments:[]
      },
      {
        id: 2,
        ava: haavatar,
        username: 'Ha Tran',
        content: <LoremIpsum p={1} />,
        liked: false,
        showComment: false,
        comments:[]
      },
      {
        id: 3,
        ava: avatar,
        username: 'Linhden',
        content: <LoremIpsum p={1} />,
        liked: false,
        showComment: false,
        comments:[]
      },
    ]
  }
  markedLike = (id) =>{
    console.log(id)
    this.setState({Posts: this.state.Posts.map(post => {
      if(post.id === id ){
        post.liked = !post.liked
        console.log(post.liked)
      }
      return post
    })})
  }

  showCommentBox = (id) =>{
    console.log(id)
    this.setState({Posts: this.state.Posts.map(post => {
      if(post.id === id ){
        post.showComment = !post.showComment
        console.log(post.showComment)
      }
      return post
    })})
  }

  addComment = (id, comment) => {
    console.log(id)
    console.log(comment)
    this.setState({Posts: this.state.Posts.map(post => {
      if(post.id === id ){
        post.comments.push(comment)
        console.log(post.comments)
      }
      return post
    })})
  }


  render(){
    return (
      <div>
        <Navbar/>
        <Posts posts ={this.state.Posts} markedLike = {this.markedLike} showCommentBox ={this.showCommentBox} addComment = {this.addComment} />
      </div>
    );
  }
  
}

export default App;
