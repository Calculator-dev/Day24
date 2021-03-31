import React, { Component } from 'react';

class App extends Component {

  getMyStorage = () => {
    let myCookieData = document.cookie;
    let myLocalStorageData = localStorage.getItem("Paragon");
    let MySessionStorageData = sessionStorage.getItem("frontend");
    return (myLocalStorageData, myCookieData, MySessionStorageData);
  };

  setMyStorage = () => {
  document.cookie = "Year=2021";
  localStorage.setItem("Paragon", "yes, but Arena first");
  sessionStorage.setItem("frontend", "React");
};

  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>Set my Storage</button>
        <button onClick={this.getMyStorage}>Get my Storage</button>
      </div>
    );
  }
}

export default App;
