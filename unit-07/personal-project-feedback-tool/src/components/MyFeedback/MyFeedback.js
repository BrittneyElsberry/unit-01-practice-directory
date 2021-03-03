import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './MyFeedback.scss';
import {connect} from 'react-redux'
import {postFB} from '../../redux/fbReducer'
import {updateUser} from '../../redux/authReducer'
import {Redirect} from 'react-router-dom'

const MyFeedback = (props)=>{

    console.log(props.feedback, 'this is the objectttttttttt')


const [fbInfo, setfbInfo] = useState({
    selectCategory: '',
    fb: '',
    fbList: {}
})
const [fbList, setfbList] = useState({}) 


useEffect(()=>{
    props.postFB() 
  
  
   
}, []) 




//Protected Route if the user is not logged in.
if(!props.username){
    return <Redirect 
    to={{
     pathname: '/',
     state: {from: props.location}   
    }}/>
}   

//This function sends the fbInfo from state to the createFB function in the fbController.js 
//The feedback is sent to the feedback table and then returned to this function to 
const submitFB =()=>{
 axios.post('/myfeedback/submit', fbInfo) //sending fbInfo to fbcontroller.js createFB function
 .then((res)=> {
     props.postFB(res.data) //this is receiving the data from the feeback table
   
     setfbInfo({fbInfo: {selectCategory: '', fb: []}})
     console.log(fbInfo.fb)
  

}).catch((err)=> console.log(err))   

}

// const handleanonymous = () =>{
//     setAnonymous({anonymous: true})
//     console.log(anonymous)
// }

console.log('this is props', props)
return(
  
    <div className='myFeedbackContainer'>
      <h1>Do you have a great idea?</h1>  

    <div className='fbcategory'>
    <h1>Feedback Category:</h1>        

    <select className='dropDownMenu' value='selectCategory' onChange={(e)=> setfbInfo({...fbInfo, selectCategory: e.target.value})} >
        <option value='default'></option>
        <option value='Customer Experience'>Customer Experience</option>
        <option value='Internal Process'>Internal Process</option>
        <option value='Leadership'>Leadership</option>
        <option value='Product'>Product</option>
       
    </select>
     
    </div>    
    

    <textarea 
    className='myTextArea' 
    type='radio'
    value={fbInfo.fb} 
    onChange={(e)=> setfbInfo({...fbInfo, fb: e.target.value})}>
    </textarea>


    <br></br>
    <button className='mySubmit' onClick={submitFB}>Submit</button>

    {props.feedback.map((elem)=>{
        return <div key={elem.feedback_id}><li>{elem.feedback} </li></div>
    })}
   
   {/* {props} */}
   {/* <label className='anonymousbtn'>Submit anonymously?
    <input 
    type='radio' 
    value='Submit anonymously?' />
    </label> */}
    
    {/* <input 
   
    type='checkbox' 
    onChange={(e) => handleCheckbox(e.target.value)} /> 

    <input/> */}


  
    {/* <textarea className='myTextArea' value={fbInfo.fb} onChange={(e)=> setfbInfo({...fbInfo, fb: e.target.value})}></textarea>
    <br></br>
    <button className='mySubmit' onClick={submitFB}>Submit</button>
    <label>Submit anonymously? </label>
    
    <input 
   
    type='checkbox' 
    onChange={(e) => handleCheckbox(e.target.value)} /> 

    <input/> */}

    {/* {props.feedback.map((elem, index) => {
        return <div key={props.index}><h1>{elem}</h1></div>

    })} */}
    <h1></h1>
    <br></br>

    <br></br>
    <br></br>
    {/* <button>Edit</button>
    <button>Delete</button> */}
    
    
    
    </div>
)
}


export default connect((s)=> ({
    ...s.fbReducer,
    ...s.authReducer

}), {postFB})(MyFeedback)

//this is spreading in two different reducer's props into this component and
//makes it so you don't have to call
//axios calls in redux need to have the apply middleware