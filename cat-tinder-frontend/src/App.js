import React, { Component } from 'react';
import Cats from './components/Cats'
import NewCat from './components/NewCat'
import Header from './components/Header'
import { getCats, createCat, deleteCat, updateCat} from './api'

import './App.css';

class App extends Component {
    constructor(props){
    super(props)
    this.state = {
      cats: []
    }
    this.handleUpdate = this.handleUpdate;
    this.updateCat = this.updateCat;
  }


  componentWillMount() {
		getCats()
		.then(APIcats => {
			this.setState({
				cats: APIcats
			})
        })
}

handleNewCat = (newCatInfo) => {
	createCat(newCatInfo)
    .then(successCat => {
        console.log("i'm here");
        this.setState({
            cats: successCat
        })
        console.log("SUCCESS! New cat: ", successCat);
    })
}

handleDeleteCat = (cat) => {
    deleteCat(cat)
    .then(destoryCat => {
        this.setState({
            cats: destoryCat
        })
    })
}

handleUpdateCat = (cat) => {
    updateCat(cat)
    let newCats = this.state.cats.filter((c) => c.id !== cat.id)
    newCats.push(cat)
    this.setState({
      cats: newCats
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NewCat handleCreateCat={this.handleNewCat}/>
        <Cats cats={this.state.cats} handleDeleteCat={this.handleDeleteCat}
         handleUpdateCat={this.handleUpdateCat} />
      </div>
    );
  }
}

export default App;
