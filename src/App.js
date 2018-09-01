import React, { Component } from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Gallery from './Components/Gallery/Gallery';
import Main from './Components/Main/Main';

class App extends Component {

  state = {
    imageGallery: ['https://placeimg.com/1000/900/any', 'https://placeimg.com/1000/900/animal', 'https://placeimg.com/1000/800/any', 'https://placeimg.com/1000/900/any']
  };

  render() {
    const {imageGallery} = this.state;
    return (
      <div>
        <Header/>
        <Main/>
        <Gallery massImage={imageGallery}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
