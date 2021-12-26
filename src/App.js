import {React,StrictMode} from "react";
import ReactDOM from "react-dom";
// import Pet from './Pet'
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
//     React.createElement(Pet,
//       { name: "luna", animal: "Dog", bred: "Havanese", }),
//     React.createElement(Pet, {
//       name: "Peper",
//       animal: "bird",
//       bred: "Cocktiel",
//     }),
//     React.createElement(Pet, {
//       name: "Sudo",
//       animal: "Dog",
//       bred: "Wheaten Terrier",
//     })
//   );
// };
const App = () => {
  return <div>
    <h1> Adopt Me!</h1>
    {/* <Pet name="Luna" animal="Dog" bred="Havanese" />
    <Pet name="Peper" animal="bird" bred="Cocktiel" />
    <Pet name="sudo" animal="Dog" bred="Wheaten Terrier" /> */
      <SearchParams />
    }
  </div>
}
ReactDOM.render(<StrictMode>
  <App />
</StrictMode>, document.getElementById("root"));
