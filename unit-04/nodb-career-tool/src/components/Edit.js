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

handleEditChange=(e)=>{
    this.setState({userInput: e.target.value})
}

render(){
    const {accomp, deleteSkills, updateSkills, skills} = this.props
    
return(

    <div>
    {this.state.editing ? (

        <div><input className="editInput" 
                    value={this.state.userInput}
                    type="text" 
                    placeholder="what would you like to change?"
                    onChange={(e)=>this.handleEditChange(e)}/>

       <button className="editSavebtn" onClick={()=> 
       {
           updateSkills(accomp.id, this.state.userInput)
           this.setState({editing: false})
        }}>Save</button></div>
    ): (
        <div className="accompListEditXbtns">
             <ul key={accomp.id}>{accomp.skills}
             <button className="editXbtn" onClick={()=>deleteSkills(accomp.id)}>X</button>
             <button className="editbtn" onClick={(e)=>this.toggleEditMode(e)}>Edit</button></ul>
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

      // onChange={(e)=>handleSave(e.target.value)
      //  value={this.state.userInput}
          

    //      )}    
   
    //  )}  )  </div> )
}
export default Edit


