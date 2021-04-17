import React, { Component } from 'react'

export default class ChoosePicture extends Component {

  render () {
    
    return (
      <div>
        <h1>Cute Picture</h1>
        <img name ='pic' src={this.props.src} alt="cute"/>
        <br/>
        <button onClick = {this.props.startPics} >START</button>
        <button onClick = {this.props.stopPic}>STOP</button>
      </div>
    );
  }

}





