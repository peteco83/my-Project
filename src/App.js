import React from 'react';
import Home from './Home';
import Movies from './Movies';
import './app.css'
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom"


export default function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <ul className="header-ul">
            <li><NavLink className="navlink" exact to="/" activeStyle={{ color: "black" }}>Home</NavLink></li>
            <li><NavLink className="navlink" to="/movies" activeStyle={{ color: "black" }} >Search Movie</NavLink></li>
          </ul>
        </header>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/movies" >
            <Movies />
          </Route>
        </Switch>

        

      </div>
    </BrowserRouter>
  )
}

