import React from 'react';
import ChoosePicture from './component/ChoosePicture';

// var PICTUREPATHS = [
//   'https://i.picsum.photos/id/111/200/300.jpg?hmac=bXXQTtXTex0m2Ogp23o7VFcNHAllTfE-8eSPYK2GeGM',
//   'https://i.picsum.photos/id/776/200/300.jpg?hmac=BQHDuDGwB4rDL14FA6htzvzuvc0JcKn24gd4on7tp1M',
//   'https://i.picsum.photos/id/953/200/300.jpg?hmac=8Bva5vDegltHxuHoyR882pbfhUI_t7iErL2SPtKrQRU',
//   'https://i.picsum.photos/id/79/200/300.jpg?hmac=uqOMZrx9qlolrYp0xS5t84xjCiD_BIjfxIugTa1xjho'
// ];

const url = "https://api.unsplash.com/photos/"
const key = "G9948LXbQF-N3HTLNsk7o_OaNDMAbeWnlw2La8xIb_0"


class App extends React.Component {
   state = { currentPic: 0,
            pics:[] 
   };

    nextPic = ()=> {
    var current = this.state.currentPic;
    console.log(current)
    var next = ++current % this.state.pics.length;
    console.log(next)
    this.setState({ currentPic: next });
    }

   fetchPics = () => {

    fetch(`${url}?client_id=${key}`)
    .then((response) => {return response.json()})
    .then((jsonResponse) => {  
     jsonResponse.forEach(element => {
      this.setState({pics: [...this.state.pics, element.urls.small] })})
    });
    
    
  }

   componentDidMount= () =>{
    this.fetchPics()
   
   }

 randomVar;

  startPics = () =>{
   this.randomVar = setInterval(()=>{
    this.nextPic()
   },5000);
  }

  stopPic = () =>{

  clearInterval(this.randomVar)
  }

  

  render() {
    //var src = PICTUREPATHS[this.state.currentPic];
    return (
      <div>
        <ChoosePicture src={this.state.pics[this.state.currentPic]} startPics={this.startPics} stopPic = {this.stopPic}/>
        
      </div>
    )
  }
}  
export default App;