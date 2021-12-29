import { Link } from "react-router-dom"
// import Details from "./detail.js"
/* eslint-disable react/prop-types */
//import React from "react";

// const Pet = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h2", {}, props.name),
//         React.createElement("h3", {}, props.animal),
//         React.createElement("h3", {}, props.bred),
//     ]);
// };
const Pet = ({
    name,
    animal,
    breed,
    images,
    location,
    id

}) => {
    let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
    if (images.length) {
        hero = images[0];
    }
    return (
        <Link to={`/details/${id}`} className="pet">
          <div className="image-container">
            <img src={hero} alt={name} />
          </div>
          <div className="info">
            <h1>{name}</h1>
            <h2>{`${animal} — ${breed} — ${location}`}</h2>
          </div>
        </Link>
      );
    };
    
    export default Pet;