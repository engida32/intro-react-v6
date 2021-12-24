//import React from "react";

// const Pet = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h2", {}, props.name),
//         React.createElement("h3", {}, props.animal),
//         React.createElement("h3", {}, props.bred),
//     ]);
// };
const Pet = (props) => {
    return <div>
        <h2>{props.name}</h2>
        <h3>{props.animal}</h3>
        <h3>{props.bred}</h3>
    </div>
};
export default Pet;