import React, { Component } from 'react';
import './App.css';
import MemoryTiles from "./components/TilesApp";
import tiles from "./tiles.json";
import Wrapper from "./components/wrapper/Wrapper";



let memoryCards = [];
let Score = 0;
let topScore = 0;

class App extends Component {
  state = {
    tiles
  };
  memoryCheck = id => {
    if (!memoryCards.includes(id)) {
      memoryCards.push(id);
      Score++
      console.log(memoryCards + " : " + Score);
      if (Score > topScore) {
        topScore = Score;
      }
    } else {
      memoryCards = [];
      Score = 0;
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
          <h3>Score: {Score} | Top Score: {topScore}</h3>
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
