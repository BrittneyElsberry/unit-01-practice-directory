import React, {useState} from 'react'
import axios from 'axios'
import './MyFeedback.scss';
// import {connect} from 'react-redux'
// import {updateUser} from '../../redux/authReducer'


const MyFeedback = (props)=>{

const [fb, setFB] = useState('')

return(

    <div className='myFeedbackContainer'>
        
     <header>
     <h1>My Feedback</h1>    
    </header>   

    
    <textarea className='myTextArea'></textarea>
    <br></br>
    <button className='mySubmit'>Submit</button>



    <br></br>
    <br></br>
    <br></br>
    <button>Edit</button>
    <button>Delete</button>
    
    
    
    </div>
)

}

export default MyFeedback