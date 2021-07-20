
import './App.css';
import React, { Component } from 'react'
import { CardList } from './components/card-list/CardList-Component';
import {SearchBox} from './components/search-box/Search-box-component'

class App extends Component {

  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  async componentDidMount()  {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    this.setState({monsters: json})
  }

  handleSearch = (event) => {
        //console.log(event.target.value)
    
        this.setState({ searchField: event.target.value}) 
  }

  render(){

    const { monsters, searchField} = this.state
    const filteredMonsters = monsters.filter( (monster) => {
      return (
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      ) 
    })
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
        placeholder='Search for monsters'
        handleChange={this.handleSearch}
        />
        <CardList
          monsters={filteredMonsters}
        />
      </div>
    );
  }





}

export default App;
