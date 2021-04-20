import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";
import MapEx from "./component/Map";
import UseEffectEx from "./component/UseEffectEx";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "cyril",
          age: 25
        },
        {
          id: 2,
          name: "Jose",
          age: 26
        },
        {
          id: 3,
          name: "Nisha",
          age: 24
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Router>
          <Link to="/">Home</Link> | <Link to="/map">Map()</Link> |{" "}
          <Link to="/useeffect">UseEffect()</Link> |{" "}
          <Switch>
            <Route path="/map">
              <MapEx />
            </Route>
            <Route path="/useeffect">
              <UseEffectEx />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
