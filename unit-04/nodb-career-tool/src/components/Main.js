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
      jobListing: {},
      myNextRole: ''   

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


  getMyRole=()=>{
    axios.get('/api/myRole') 
    .then(res => {
      console.log(res.data)
        this.setState({
            myNextRole: res.data
        })
    }).catch(err => console.log(err))
    }


    postmyRole=(roleTitle)=>{
      axios.post('/api/myRole', {roleTitle}) 
      .then(res => {
          console.log(res.data)
          this.setState({
              myNextRole: res.data
          })
      }).catch(err => console.log(err))
      
      
      }

      displayRole=(userInput)=>{
        return <h1>{userInput}</h1>

      }

      handleRoleChange=(e)=>{
        this.setState({myNextRole: e})
      }


render(){



return(

<div className="mainContainer">
      <Header myNextRole={this.state.myNextRole} displayRole={this.state.displayRole} handleRoleChange={this.state.handleRoleChange}/>
      <JobListing jobListing={this.state.jobListing} />
     

</div>

)
}
}

export default Main