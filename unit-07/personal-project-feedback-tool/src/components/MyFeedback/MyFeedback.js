import React, {useState} from 'react'
import axios from 'axios'
import './MyFeedback.scss';
// import {connect} from 'react-redux'
// import {updateUser} from '../../redux/authReducer'


const MyFeedback = (props)=>{

const [selectedfb, setSelectedFB] = useState('')

console.log(selectedfb)
return(
  
    <div className='myFeedbackContainer'>
        
    
     {/* <h1>Feedback Category</h1>     */}
    <select className='dropDownMenu' value='selectedfb' onChange={(e)=> setSelectedFB({selectedfb: e.target.value})} >
        <option value='default'></option>
        <option value='leadership'>Customer Experience</option>
        <option value='internalProcess'>Internal Process</option>
        <option value='leadership'>Leadership</option>
        <option value='product'>Product</option>
       
    </select>
     

    
    <textarea className='myTextArea'></textarea>
    <br></br>
    <button className='mySubmit'>Submit</button>



    <br></br>
    <br></br>
    <br></br>
    {/* <button>Edit</button>
    <button>Delete</button> */}
    
    
    
    </div>
)

}

export default MyFeedback