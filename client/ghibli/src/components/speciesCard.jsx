import React from 'react';

const SpeciesCard = (props) => {
    console.log(props);
      
      return (
        <div className="card w-50">
        <div className="card-body">
          <h3 className="card-title">{props.value.name}</h3>
          <p className="card-text">{props.value.classification}</p>
        </div>
      </div>
      );
    };
    
    
    
    
    export default SpeciesCard;