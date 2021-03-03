// import reactDom from "react-dom";
import React, {Component} from 'react';
import {postFB} from '../../redux/fbReducer'
import {updateFB} from '../../redux/fbReducer'
import {deleteFB} from '../../redux/fbReducer'
import {connect} from 'react-redux'

class Edit extends Component {
constructor(props){
    super(props)

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


render () {
    // console.log(props.deleteFB())
    const {elem} = this.props

    return(
        <div>
        {this.state.editing ? (
            <li>
                <input 
                className='editInput'
                value={this.state.userInput}
                type='text'
                onChange={(e)=>this.handleEditChange(e)}
                
                />
            </li>

        )  : (
            <li>
          
             <button className="editXbtn" onClick={()=>this.props.deleteFB()}>X</button>
             <button className="editbtn" onClick={(e)=>this.toggleEditMode(e)}>Edit</button>
            </li>

        ) }
        </div>
    )
}

}

export default connect((s)=> s, {postFB, updateFB, deleteFB}) (Edit)