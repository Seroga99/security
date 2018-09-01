import React, { Component } from 'react';
import ReactDOM from "react-dom";
import SideBar from "./Components/Sidebar/Sidebar";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <Footer/>
      </div>
    );
  }
}

export default App;
