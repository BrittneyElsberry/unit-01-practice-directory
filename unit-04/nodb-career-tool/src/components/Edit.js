import React, {Component} from 'react'
import Accomplishments from './Accomplishments'
import axios from 'axios'

class Edit extends Component {
constructor(){
super()
this.state = {
    editing: false,
    userInput: ''
   
}
}

toggleEditMode=()=>{
    this.setState({editing: true})
}

render(){
    const {accomp, deleteSkills} = this.props
    
return(

    <div>
    {this.state.editing ? (

        <div><input/><button>Save</button></div>
    ): (
        <div>
             <ul key={accomp.id}>{accomp.skills}
             <button onClick={()=>deleteSkills(accomp.id)}>X</button>
             <button onClick={(e)=>this.toggleEditMode(e)}>Edit</button></ul>
        </div>
    ) }
    </div>
            )


}

    // return(
    
    // <div> 


    //           {this.state.accomplishments.map(accomp => {
    //          return {this.state.editing 
    //          ? 
    //             <input key={accomp.id}>{accomp.skills}<button onClick={()=>this.deleteSkills(this.state.accomplishments.id)}>X</button><button onClick={(e)=>this.handleSave(e)}>Save</button> <input/>
    //         : 
    //           <ul key={accomp.id}>{accomp.skills}<button onClick={()=>this.deleteSkills(this.state.accomplishments.id)}>X</button><button onClick={(e)=>this.handleSave(e)}>Save</button></ul>        

      
          

    //      )}    
   
    //  )}  )  </div> )
}
export default Edit


