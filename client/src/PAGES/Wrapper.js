import React from 'react'
import { Route, Switch } from 'react-router-dom';




import Home from '../components/home/Home'



function Wrapper() {
  return (
    <div id="myWrapper">
      <Switch>


      <Route exact path="/" component={Home} />




    </Switch>
  </div>
  )
}

export default Wrapper