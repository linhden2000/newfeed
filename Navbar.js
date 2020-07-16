import React, {Component} from 'react';
import '../App.css';

class Navbar extends Component {
  render(){
    return (
        <div className="container">
          <nav className="navbar">
              <ul>
                  <li><a href="#">Daily Goal</a></li>
                  <li><a href="#about">Newsfeed</a></li>
                  <li><a href="#contact">Profile</a></li>
              </ul>   
          </nav>
        </div> 
    );
  }
  
}

export default Navbar;