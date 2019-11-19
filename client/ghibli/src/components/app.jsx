import React, { Component } from "react";
import Film from "./film";
import Species from "./species";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loaded: null 
    };
  }

  handleClick = () => {
    this.setState({ loaded: true });
  };

  handleClick2 = () => {
    this.setState({ loaded: false });
  };
  



  render() {
        let switchCards;
        switch(this.state.loaded) {
          case true:
            return(
              switchCards = <Film />)
              break;
          case false:
            return(
              switchCards = <Species />)
              break;
          default:
            return (
              <div className='d-flex flex-column'>
                <img
        src="public/movie.jpg"
        alt="Created by"/><br />
              <button className='w-25' onClick={() => this.handleClick()}>Load Films</button><br />
              <button className='w-25' onClick={() => this.handleClick2()}>Load Species</button>
              <a href='http://localhost:5000'>Chirps</a></div>)
      }


   
      
    }
  };


export default App;

