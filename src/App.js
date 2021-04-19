import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";

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
          <Link to="/">Map()</Link>
        </Router>

        <table>
          <tbody>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Age</td>
            </tr>
            {this.state.data.map((person, i) => (
              <tr key={i}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
