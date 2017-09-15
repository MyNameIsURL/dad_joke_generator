import React, { Component } from 'react';
import './App.css';
import { jokes } from './dadJokes.json';
import DadJoke from './components/dadJoke.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "Click the button to generate a joke!"
    }
  }

  generateJoke() {
    let joke = jokes[Math.floor(Math.random()*jokes.length)];
    this.setState({joke: joke});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Dad Joke Generator</h1>
          <button onClick={() => this.generateJoke()}>Generate</button>
        </div>
        <p className="App-intro">
          <DadJoke joke={this.state.joke} />
        </p>
        <small className="github-link">
          Made with <i className="fa fa-heart"></i> by&nbsp;
          <a href="https://www.youtube.com/channel/UC9nBRXEi-gthsZf8BBhp_Jw?view_as=subscriber" target="_blank" rel="noopener noreferrer">Brice@CodeLife.io</a>
        </small>
      </div>
    );
  }
}

export default App;
