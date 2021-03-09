// import reactDom from "react-dom";
import React, {Component} from 'react';
import {postFB} from '../../redux/fbReducer'
import {updateUser} from '../../redux/authReducer'
import {connect} from 'react-redux'
import './Edit.scss'
import axios from 'axios'


class Edit extends Component {
constructor(props){
    super(props)

    this.state = {
        editing: false,
        userInput: '',
        feedback: [],
        comment: ''
    }
}


//Editing functions ----------------------------

toggleEditMode=()=>{
    this.setState({editing: true})
    // this.handleEditChange(this.props.feedback_id)
}

handleEditChange=(e)=>{
    this.setState({userInput: e.target.value})
   
}

handleSave=(id, userInput)=>{
    axios.put(`/myfeedback/${id}`, {userInput})
    .then(_ => this.props.postFB())
}


//Manager comment functions ---------------

handleCommentInput = (e) => {
    this.setState({comment: e.target.value})
}

addComment = (comment) => {
axios.post(`/managercomment`, comment)
// need to create a controller function to add comments to feedback
.then(res=> res.data)
}


render () {
   
console.log(this.props.user_admin, 'propppppps')


    return(
        <div>
        {this.state.editing ? (

            <div>
            <li>
                <input 
                className='editInput'
                value={this.state.userInput}
                type='text'
                onChange={(e)=>this.handleEditChange(e)}
                
                />

                <button 
                className='btn' 
                onClick={()=> {
                    this.handleSave(this.props.feedback_id, this.state.userInput)
                    this.setState({editing: false})
                    console.log(this.props.feedback_id, 'this is what is passed to the controller function')

                }}>
                SAVE</button>
            </li>
            </div>

        )  : (

            this.props.user_admin ? (
                <div>
                    <input 
                    value={this.state.comment}
                    type='text'
                    onChange={(e)=> this.handleCommentInput(e)}
                    
                    />
                    <button 
                    onClick={()=>this.addComment(this.state.comment)}
                    
                    
                    >Comment</button>
                </div>
                    
        )
        :

          <div className='btnContainer'>
          
             <button className="btn" id='fblabels' onClick={()=>this.props.deleteFeedback(this.props.feedback_id)}>Delete</button>
             <button className="btn" onClick={()=>this.toggleEditMode()}>Edit</button>
             </div>
        
        ) }
        </div>
    )
}

}

export default connect((s)=>({
    ...s.fbReducer,
    ...s.authReducer
    
    }), {postFB, updateUser}) (Edit)