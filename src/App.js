import React from 'react';
import './App.css';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    }
  }

  render() {
    console.log("This.state in App.js: ", this.state);
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}


export default App;
