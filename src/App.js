import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Home from './pages/home/Home'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Login /></Route>
        <Route path="/home"><Home /> </Route>
      </Switch>
    </Router>
  )
}
