import { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value={theme}>
      <div>


        <Router>  <header>
          <Link to="/"> <h1> Adopt me!</h1> </Link>
        </header>
          <Switch>
            <Route path="/details/:id">
              <Details theme={theme} />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};


render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);