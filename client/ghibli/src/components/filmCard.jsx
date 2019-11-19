import React from "react";


const FilmCard = (props) => {
console.log(props);
  
  return (
    <div className="card w-50">
      <div className="card-body">
        <h3 className="card-title">{props.value.title}</h3>
        <p className="card-text">{props.value.description}</p>
      </div>
    </div>
  );
};




export default FilmCard;