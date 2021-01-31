import React, {Component} from 'react'
import axios from 'axios'
import Header from './Header'
import Accomplishments from './Accomplishments'

class Main extends Component {
constructor(){
    super()
    this.state = {
      goals: [{goalName: '', startDate: '', endDate: '', goalID: 0, complete: false}],
      careerS: [{careerSId: 0, careerSName: ''}]   

    }
}

render(){

return(

<div className="mainContainer"><h1>This is the main Component</h1></div>

)

}

}

export default Main