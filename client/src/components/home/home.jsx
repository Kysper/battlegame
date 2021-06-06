import React, { Component } from "react";
import '../home/home.css'
import Nav from "../nav/nav";
import Main from "../main/main";
import Footer from "../footer/footer";


class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
