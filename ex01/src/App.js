import React, { Component } from 'react';

class App extends Component {


  setMyStorage = () => {
  document.cookie = "Year=2021";
  localStorage.setItem("Paragon", "yes, but Arena first");
  sessionStorage.setItem("frontend", "React");
}

  render() {
    return (
      <div>
        <button onClick={this.setMyStorage}>Set my Storage</button>
      </div>
    )
  }
}

export default App;