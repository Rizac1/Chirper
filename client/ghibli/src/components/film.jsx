import React, { Component } from "react";
import FilmCard from "./filmCard";
import SpeciesCard from "./speciesCard";
import Species from "./species";
import "isomorphic-fetch";
import "es6-promise";

class Film extends Component {
  constructor(props) {
    super(props);
    this.state = { films: [], loaded: true };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(result => result.json())
      .then(films => {
        this.setState({ films });
      });
  }

  handleClick = () => {
    this.setState({ loaded: !this.state.loaded });
  };

  render() {
   
      if (this.state.loaded === true) {
      return (
        <div className='d-flex flex-column'>
        <img
          src="public/movie.jpg"
        />
        <button className='w-25' value={this.state.loaded} onClick={this.handleClick}>
          Load Species
        </button>
            {this.state.films.map(film => <FilmCard key={film.id} value={film} />)}
          </div>
       
      );
    } else {
      return (
      <div>
            <Species />
    </div>
      );
    }
    } 
  };


export default Film;
