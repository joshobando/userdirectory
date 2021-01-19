import { Component } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}