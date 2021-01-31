import React, {Component} from 'react'
import Main from './Main'
import axios from 'axios'


class Accomplishments extends Component{
constructor(){
    super()
    this.state = {
        id: 0,
        skills: []

    }
}

componentDidMount(){
    this.getSkills()
}


getSkills=()=>{
    axios.get('/api/careerSkills') //because of the proxy, i don't have to write the http://....
    .then(res => {
        this.setState({
            skills: res.data
        })
    }).catch(err => console.log(err))
    
    
    }


    postSkills=(skill)=>{
        axios.post('/api/careerSkills', {skill}) 
        .then(res => {
            this.setState({
                skills: res.data
            })
        }).catch(err => console.log(err))
        
        
        }

handleSubmit=()=>{

}


handleEdit=()=>{

}

handleDelete=()=>{

}

render(){
    return(
        <div className="AccompContainer"> 
            <h1>Accomplishments</h1>
            <input className="AccompInput" type="text" placeholder="write out examples of when you specifically met their qualification"></input>
            <div className="AccompList">
            <button onClick={()=>this.handleSubmit()}>Submit</button>
            <button onClick={()=>this.handleEdit()}>Edit</button>
            <button onClick={()=>this.handleDelete()}>Delete</button>

            </div>

        </div>
    )
}


}

export default Accomplishments