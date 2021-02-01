import React, {Component} from 'react'
import axios from 'axios'
import Header from './Header'
import Accomplishments from './Accomplishments'
import JobListing from './JobListing'

class Main extends Component {
constructor(){
    super()
    this.state = {
      goals: [{goalName: '', startDate: '', endDate: '', goalID: 0, complete: false}],
      careerS: [{careerSId: 0, careerSName: ''}],
      jobListing: {}   

    }
}


componentDidMount(){
  this.getJobListing()
}


getJobListing=()=>{
  axios.get('/api/jobListing') 
  .then(res => {
    console.log(res.data)
      this.setState({
          jobListing: res.data
      })
  }).catch(err => console.log(err))
  
  
  }

render(){



return(

<div className="mainContainer">
  
      <h1>This is the main Component</h1>
      <JobListing jobListing={this.state.jobListing} />

</div>

)

}

}

export default Main