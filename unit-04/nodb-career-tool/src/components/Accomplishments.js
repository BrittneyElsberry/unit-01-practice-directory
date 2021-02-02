import React, {Component} from 'react'
import Main from './Main'
import axios from 'axios'



class Accomplishments extends Component{
constructor(){
    super()
    this.state = {
        id: 0,
        skills: '',
        accomplishments: []

    }
}

componentDidMount(){
    this.getSkills()
}


getSkills=()=>{
    axios.get('/api/careerSkills')
    .then(res => {
        this.setState({
            accomplishments: res.data
        })
    }).catch(err => console.log(err))
    }


    postSkills=(skills)=>{
        axios.post('/api/careerSkills', {skills}) 
        .then(res => {
            console.log(res.data)
            this.setState({
                accomplishments: res.data
            })
        }).catch(err => console.log(err))
        }


  deleteSkills = id =>{
      axios.delete(`/api/careerSkills/${id}`)
      .then(res => {
          this.setState({
                accomplishments: res.data
          })
      }).catch(err => console.log(err))
  }      


 handleChange= e =>{
    this.setState({skills: e})
 }  
        

// handleEdit=()=>{

// }

render(){

    return(
        <div className="AccompContainer"> 
            <h1>Accomplishments</h1>
            <br></br>
            
            <input className="AccompInput" 
                    type="text" 
                    value={this.state.skills}
                    placeholder="what skills do you have that match the job listing?" 
                   onChange={(e)=>this.handleChange(e.target.value)}></input>
        

            <div className="AccompList">
            <br></br>
            <button onClick={()=>this.postSkills(this.state.skills)}>Submit</button>
            <br></br>

            {this.state.accomplishments.map(accomp => {
             return <ul key={accomp.id}>{accomp.skills}<button onClick={()=>this.deleteSkills(this.state.accomplishments.id)}>X</button> </ul> })}

            
            {/* <button onClick={()=>this.handleEdit()}>Edit</button> */}
         

            </div>

        </div>
    )
}
}

export default Accomplishments