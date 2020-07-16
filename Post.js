import React, {Component} from 'react';
import '../App.css';
import Comments from './Comments'
import { LoremIpsum} from 'react-lorem-ipsum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faThumbsUp as fasThumbsUp, faSleigh } from '@fortawesome/free-solid-svg-icons'

import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faShareSquare } from '@fortawesome/free-regular-svg-icons'
// import { faShareSquare } from '@fortawesome/free-solid-svg-icons'


class Post extends Component  {
  state = {
    comment: ''
  }

  onChange = (e)=>{
    this.setState({comment: e.target.value})
  }

  reset


  
  render(){
    const {id, content, ava, username, liked, showComment, comments} = this.props.post;
    return(
      <div className ="post">
        <header className = "post-header">
            <img src = {ava} alt="avatar"/>
            <p>{username}</p>
        </header>
        <section className = "main-post">
            {content} 
        </section>
        <section className = "post-footer">
            <div >
              { liked
              ? <FontAwesomeIcon onClick ={this.props.markedLike.bind(this, id)}  className = "like" icon={fasThumbsUp}/>
              : <FontAwesomeIcon onClick ={this.props.markedLike.bind(this, id)}  className = "like" icon={faThumbsUp}/>
              }
                
            </div>
            <div onClick ={this.props.showCommentBox.bind(this, id)}>
                <FontAwesomeIcon icon={faComment}/>
            </div>
            <div>
                <FontAwesomeIcon icon={faShareSquare} />
            </div>
        </section>
        {
         showComment?
         <div>
          <footer className ="commentSection">
            <img src = {ava} alt="avatar"/>
            <input className="commentBox" name = "comment"
            placeholder = " Enter your comment"
            value = {this.state.comment} rows ="4"
            onChange = {this.onChange} />
            <button type = "submit" onClick = {this.props.addComment.bind(this, id, this.state.comment)}> Add Comment </button>
            
            <br></br>
          </footer>
          <div className = "Comments">
            <Comments Comments = {comments} ava = {ava} />
          </div>
         </div>
          : null
        }
        
      </div>

    );
  }
  
}

export default Post;