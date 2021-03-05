// import reactDom from "react-dom";
import React, {Component} from 'react';
import {postFB} from '../../redux/fbReducer'
// import {updateFB} from '../../redux/fbReducer'
// import {deleteFB} from '../../redux/fbReducer'
import {connect} from 'react-redux'
import './Edit.scss'
import axios from 'axios'

class Edit extends Component {
constructor(props){
    super(props)

    this.state = {
        editing: false,
        userInput: '',
        feedback: []
    }
}

// componentDidMount =()=>{
// this.setState({feedback: this.props.postFB()})
// }


toggleEditMode=()=>{
    this.setState({editing: true})
    this.handleEditChange(this.props.feedback_id)
}

handleEditChange=(e)=>{
    this.setState({userInput: e.target.value})
   
}

handleSave=(id)=>{
    axios.put(`/myfeedback/${id}`)
    .then(_=> this.props.postFB())
}


render () {
   

console.log(this.props.feedback_id)

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
                    this.handleSave(this.props.feedback_id)
                    this.setState({editing: false})

                }}>
                SAVE</button>
            </li>
            </div>

        )  : (
          <div>
          
             <button className="btn" id='fblabels' onClick={()=>this.props.deleteFeedback(this.props.feedback_id)}>X</button>
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
    
    }), {postFB}) (Edit)