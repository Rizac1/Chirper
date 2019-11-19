import React, { Component } from "react";
import SpeciesCard from "./speciesCard";
import FilmCard from "./filmCard";
import Film from "./film";
import "isomorphic-fetch";
import "es6-promise";

class Species extends Component {
  constructor(props) {
    super(props);
    this.state = { species: [], loaded: true };
  }


  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/species")
    .then(resp => resp.json())
    .then(species => {
        this.setState({ species })
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
        Load Films
      </button>
      {this.state.species.map(species => <SpeciesCard key={species.id} value={species} />)}
    </div>
     
    );
  } else {
    return (
    <div>
        <Film />
  </div>
    )
  }
  } 
};
export default Species;