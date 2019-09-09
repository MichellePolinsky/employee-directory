import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import EmployeePage from './components/EmployeePage'
import AddNew from './components/AddNew'
import HomePage from './components/HomePage'

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <h2 className="header">Solar Shore Formulators Foundation</h2>
          <nav>
            <ul className="nav-bar">
              <li className="nav-link">
                <Link to="/HomePage">Staff Directory</Link>
              </li>
              <li className="nav-link">
                <Link to="/AddNew">Add Employee</Link>
              </li>
              {/* <li className="nav-link">
                <Link to="/EmployeePage">Add Employee</Link>
              </li> */}
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/HomePage" component={HomePage}></Route>
          <Route exact path="/AddNew" component={AddNew}></Route>
          {/* <Route exact path="/EmployeePage" component={EmployeePage}></Route> */}
        </Switch>
      </Router>
    )
  }
}

export default App
