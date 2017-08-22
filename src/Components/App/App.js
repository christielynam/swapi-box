import React, { Component } from 'react';
import './App.css';
import Scroll from '../Scroll/Scroll';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    const films = fetch('https://swapi.co/api/films/').then(data => data.json())
    const people = fetch('https://swapi.co/api/people/').then(data => data.json())
    const planets = fetch('https://swapi.co/api/planets/').then(data => data.json())
    const vehicles = fetch('https://swapi.co/api/vehicles/').then(data => data.json())

    return Promise.all([films, people, planets, vehicles])
    .then((data) => {
      this.fetchHomeworld(data[1].results)
      this.fetchSpecies(data[1].results)
      this.fetchResidents(data[2].results)
      this.setState({data: data})
    }).catch((e) => {console.log(e)})
  }

  fetchHomeworld(data) {
    const specificHomeworldData = data.map((world, i) => {
      return fetch(world.homeworld)
      .then(res => res.json())
    })

    return Promise.all(specificHomeworldData).then( homeworlds => {
      homeworlds.map((homeworld, i) => {
        Object.assign(data[i], {Homeworld: homeworld.name, Population: homeworld.population})
      })
    })
  }

  fetchSpecies(data) {
    const specificSpeciesData = data.map((species, i) => {
      return fetch(species.species)
      .then(res => res.json())
    })

    return Promise.all(specificSpeciesData).then( species => {
      species.map((specie, i) => {
        Object.assign(data[i], {Species: specie.name})
      })
    })
  }

  fetchResidents(data) {
    const specificResidentsData = data.map( (residents, i) => {
      const newArray = [];

      const specificResidents = residents.residents.map((link, i) => {
        return fetch(link)
        .then(res => res.json())
      })
      return Promise.all(specificResidents).then( people => {
        people.map((person, i) => {
          newArray.push(person.name)
          Object.assign(residents, {Residents: newArray})
        })
      })
    })
  }

  render() {
    const { data } = this.state
    console.log(data)

    if(data) {
      return (
        <div className="App">
        <Scroll data={this.state.data[0].results}/>
        <Button buttonText='people' />
        <Button buttonText='planets' />
        <Button buttonText='vehicles' />
        <Button buttonText='View Favorites' />
        <CardContainer />
        </div>
      )
    } else {
      return (
        <div>
          Loading
        </div>
      )
    }
  }
}

export default App;
