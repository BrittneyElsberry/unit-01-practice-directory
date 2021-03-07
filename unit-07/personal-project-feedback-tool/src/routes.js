import React from 'react'
import {Switch, Route} from 'react-router-dom'
// import NewAuth from './components/Auth/NewAuth'
import Auth from './components/Auth/Auth'
import DeptDash from './components/DeptDash/DeptDash'
import MyFeedback from './components/MyFeedback/MyFeedback'
import CompDash from './components/CompDash/CompDash'
import ManagerView from './components/ManagerView/ManagerView'
import InternalProcess from './components/InternalProcess/InternalProcess'



export default (

<Switch>
<Route exact path ='/' component={Auth}/>
<Route path ='/deptdash' component={DeptDash}/>
<Route path ='/myfeedback/' component={MyFeedback}/>
<Route path ='/companydash' component={CompDash}/>
<Route path ='/managerview' component={ManagerView}/>
<Route path ='/internalprocess' component={InternalProcess}/>
</Switch>

)