import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Signup from './Signup'

const Index = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/signup">Signup</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/signup" component={Signup} />
    </main>
  </div>
)

export default Index