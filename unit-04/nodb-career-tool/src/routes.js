import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Goals from './components/Goals'
import Accomplishments from './components/Accomplishments'
import Home from './components/Home/Home'

export default (

<Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/careeraccomplishments' component={Accomplishments}/>
    <Route path='goals' component={Goals} />
</Switch>

)