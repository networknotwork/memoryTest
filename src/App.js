import React, { Component } from 'react';
import './App.css';
import MemoryTiles from "./components/TilesApp";
import tiles from "./tiles.json";
import Wrapper from "./components/wrapper/Wrapper";



let memoryCards = [];

class App extends Component {
  state = {
    tiles: tiles,
    score: 0,
    topScore: 0
  };
  memoryCheck = id => {
    if (!memoryCards.includes(id)) {
      memoryCards.push(id);
      this.setState({
        score: this.state.score+1,
        tiles: this.state.tiles.sort(()=> Math.random() - .5)
      })
      console.log(memoryCards + " : " + this.state.score);
    } else {
      memoryCards = [];
      this.setState({
        score: 0,
        topScore: this.state.score,
        tiles: this.state.tiles.sort(()=> Math.random() - .5)
      })
      console.log(memoryCards);
    }
  }
  render() {
    return (
      <div className="container">
        <div>
          <h1>Memory Test</h1>
          <p><strong>Rules: Click on each picture once.</strong></p>
          <hr />
          <h3>Score: {this.state.score} | Top Score: {this.state.topScore}</h3>
        </div>
        <Wrapper>
          {this.state.tiles.map(tile => (
            <MemoryTiles
              id={tile.id}
              key={tile.id}
              name={tile.name}
              image={tile.image}
              memoryCheck={this.memoryCheck}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App;
