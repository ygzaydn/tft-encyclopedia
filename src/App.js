import React, { Component } from 'react';

import './App-style.css'
import MyButton from './components/MyButton-component/MyButton'
import Champion from './components/Champion-component/Champion'
import Item from './components/Item-component/Item'
import Trait from './components/Trait-component/Trait'
import Galaxy from './components/Galaxy-component/Galaxy'
import Search from './components/Search-component/Search'
import ItemMatrix from './components/ItemMatrix-component/ItemMatrix'

import ChampionsMetaData from './assets/champions.json'
import GalaxiesMetaData from './assets/galaxies.json'
import ItemsMetaData from './assets/items.json'
import TraitsMetaData from './assets/traits.json'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flags: {
        champions: false,
        galaxies: false,
        items: false,
        traits: false,
        itemMatrix: false,
      },
      Champions: ChampionsMetaData,
      Galaxies: GalaxiesMetaData,
      Items: ItemsMetaData,
      Traits: TraitsMetaData,
      SearchQueries: {
        Name: '',
        Gold: '',
        Trait: '',
      },
      searchText: '',
      itemID: -1
    }
  }


  getChampions = () => {
    this.setState({flags: {
      champions: true,
      galaxies: false,
      items: false,
      traits: false,
      itemMatrix: false, }})
    console.log(this.state);
    console.log(this.state.Champions);
  }

  getGalaxies = () => {
    this.setState({flags: {
      champions: false,
      galaxies: true,
      items: false,
      traits: false,
      itemMatrix: false, }})
    console.log(this.state);
    console.log(this.state.Galaxies);
  }

  getItems = () => {
    this.setState({flags: {
      champions: false,
      galaxies: false,
      items: true,
      traits: false,
      itemMatrix: false, }})
    console.log(this.state);
    console.log(this.state.Items);
  }

  getTraits = () => {
    this.setState({flags: {
      champions: false,
      galaxies: false,
      items: false,
      traits: true,
      itemMatrix: false, }})
    console.log(this.state);
    console.log(this.state.Traits);
  }

  getItemMatrix = () => {
    this.setState({flags: {
      champions: false,
      galaxies: false,
      items: false,
      traits: false,
      itemMatrix: true, }})
    console.log(this.state);
    console.log(this.state.Items);
  }

  changeStyles = (event) => {
    let element = event.target.id;
    let elementLastDigitRow = `row-${parseInt(element/10)}`;
    let elementLastDigitColumn = `column-${parseInt(element%10)}`;
    for (let i=0;i<=9;i++){
    document.querySelectorAll(`.row-${i}`).forEach(el => el.children[0].style =  "filter: brightness(50%)")
    document.querySelectorAll(`.column${i}`).forEach(el => el.children[0].style =  "filter: brightness(50%)")
    }
    document.querySelectorAll(`.${elementLastDigitRow}`).forEach(el => el.children[0].style =  "filter: brightness(100%)")
    document.querySelectorAll(`.${elementLastDigitColumn}`).forEach(el => el.children[0].style =  "filter: brightness(100%)")

  }

  fixSearchState = ( dataName, metaData, filterParam) => {
    const e=window.event;

    this.setState({searchText: e.target.value}, () => {
      if (filterParam === 'name') this.setState({SearchQueries: {
        Name: this.state.searchText,
        Gold: this.state.SearchQueries.Gold,
        Trait: this.state.SearchQueries.Trait,
      }},() => {
        this.searchFilter(dataName, metaData);
      })

      else if (filterParam === 'cost') this.setState({SearchQueries: {
        Name: this.state.SearchQueries.Name,
        Gold: this.state.searchText,
        Trait: this.state.SearchQueries.Trait,
      }}, () => {
        this.searchFilter(dataName, metaData);
      })

      else if (filterParam === 'traits') this.setState({SearchQueries: {
        Name: this.state.SearchQueries.Name,
        Gold: this.state.SearchQueries.Gold,
        Trait: this.state.searchText,
      }}, () => { this.searchFilter(dataName, metaData);
      })
    })
  }

  searchFilter = (dataName, metaData) => {

    const newObj = metaData.filter( el => 
      el['name'].toString().toLowerCase().includes(this.state.SearchQueries.Name.toString().toLowerCase()) && 
      el['cost'].toString().toLowerCase().includes(this.state.SearchQueries.Gold.toString().toLowerCase()) && 
      el['traits'].toString().toLowerCase().includes(this.state.SearchQueries.Trait.toString().toLowerCase())
      );

    this.setState({[dataName]: newObj})
  }

  changeItemID = (event) => {
    this.setState({itemID: event.target.id})
  }

  itemMatrixRender = (id) => {
    let myId;
    (id%10>=id/10 ?
      myId = id
    : myId = (id%10)*10 + parseInt(id/10)
    )
    return (
      ItemsMetaData.filter(el=> el.id==myId).map(el=> {
        return (
          <div className="item-matrix-item-section">
            <a className="item-matrix-item-section-title">{el.name}</a>
            <a className="item-matrix-item-section-description">{el.description}</a>
          </div>
        )
      })
    )
  }

  render() {
    const { flags, Champions, Galaxies, Items, Traits, searchText, itemID } = this.state;
    
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
          <MyButton
            name="Item Matrix"
            click={this.getItemMatrix}
          />
        </div>
        <div className="info-section">        
        {flags.champions?
          <div className="char-section">
            <a className="info-title">Champions</a>
            <div className="search-section">
            <Search 
              placeholder="Filter by name"
              value={searchText}
              searchFunction={()=>this.fixSearchState('Champions', ChampionsMetaData, 'name')}
            />
            <Search 
              placeholder="Filter by cost"
              value={searchText}
              searchFunction={()=>this.fixSearchState('Champions', ChampionsMetaData, 'cost')}
            />
            <Search 
              placeholder="Filter by traits"
              value={searchText}
              searchFunction={()=>this.fixSearchState('Champions', ChampionsMetaData, 'traits')}
            />
            </div>
            
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
        : null}

        {flags.galaxies?
          <div className="galaxy-section">
            <a className="info-title">Galaxies</a>
            {Galaxies.map(el => {
              return (
                <Galaxy
                  name={el.name}
                  key={el.key}
                  description={el.description}
                  imgId={el.key} />
              )
            })}
          </div>
        : null}

        {flags.items?
          <div className="items-section">
            <a className="info-title">Items</a>
            {Items.map(el => {
              return (
                <Item
                  name={el.name}
                  key={el.id}
                  imgId={el.id}
                  description={el.description}
                 />
              )
            })}
          </div>
        : null}

        {flags.traits?
          <div className="traits-section">
            <a className="info-title">Traits</a>
            {Traits.map(el => {
              return (
                <Trait
                  name={el.name}
                  key={el.key}
                  description={el.description}
                  imgId={el.key}
                  />
              )
            })}
          </div>
        : null}

        {flags.itemMatrix?
          <div className="item-matrix-section">
            <ItemMatrix 
              changeStyle={this.changeStyles}
              changeItemID={this.changeItemID}
            />
            {itemID>=0 ? 
              this.itemMatrixRender(itemID)
            : null}
          </div>
        : null}

        </div>
      </div>
    );
  }
}
export default App;

// 