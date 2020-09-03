import React, { Component } from 'react';

import './App-style.css'
import MyButton from './components/MyButton-component/MyButton'
import Champion from './components/Champion-component/Champion'


import Champions from './assets/champions.json'
import Galaxies from './assets/galaxies.json'
import Items from './assets/items.json'
import Traits from './assets/traits.json'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      champions: false,
      galaxies: false,
      items: false,
      traits: false
    }
  }

  getChampions = () => {
    this.setState({champions: true,
      galaxies: false,
      items: false,
      traits: false })
    //console.log(this.state);
    //console.log(Champions);
  }

  getGalaxies = () => {
    this.setState({champions: false,
      galaxies: true,
      items: false,
      traits: false })
    console.log(this.state);
    console.log(Galaxies);
  }

  getItems = () => {
    this.setState({champions: false,
      galaxies: false,
      items: true,
      traits: false })
    console.log(this.state);
    console.log(Items);
  }

  getTraits = () => {
    this.setState({champions: false,
      galaxies: false,
      items: false,
      traits: true })
    console.log(this.state);
    console.log(Traits);
  }


  render() {
    const { champions, galaxies, items, traits } = this.state;
    return (
      <div className="main-page-section">
        <a className="title">TFT Encyclopedia</a>
        <div className="button-section">
          <MyButton
            name="Champions"
            click={this.getChampions}
          />
          <MyButton
            name="Galaxies"
            click={this.getGalaxies}
          />
          <MyButton
            name="Items"
            click={this.getItems}
          />
          <MyButton
            name="Traits"
            click={this.getTraits}
          />
        </div>
        <div className="info-section">
        {champions? 
          <div className="char-section">
            {Champions.map(el => {
              return (
                <Champion
                  name={el.name}
                  cost={el.cost}
                  traits={el.traits}
                  key={el.championId} />
              );
            })}
          </div>
        : null
        }
        </div>
      </div>
    );
  }
}

export default App;
