import React, {useState} from 'react'
import axios from 'axios'
import './MyFeedback.scss';
import {connect} from 'react-redux'
import {postFB} from '../../redux/fbReducer'
import {updateUser} from '../../redux/authReducer'

const MyFeedback = (props)=>{

    

const [fbInfo, setfbInfo] = useState({
    selectCategory: '',
    fb: [],
})

// const [displayfb, setDisplayFb] = useState([]) 
//trying with just redux fbreducer




const submitFB =()=>{
 axios.post('/myfeedback/submit', fbInfo) //sending fbInfo to fbcontroller.js createFB function
 .then((res)=> {
     props.postFB(res.data)
     setfbInfo({fbInfo: {selectCategory: '', fb: []}})
    //  console.log(props)

}).catch((err)=> console.log(err))   

}


return(
  
    <div className='myFeedbackContainer'>
    <h1>{props.username} Feedback</h1>        

    <select className='dropDownMenu' value='selectCategory' onChange={(e)=> setfbInfo({...fbInfo, selectCategory: e.target.value})} >
        <option value='default'></option>
        <option value='Customer Experience'>Customer Experience</option>
        <option value='Internal Process'>Internal Process</option>
        <option value='Leadership'>Leadership</option>
        <option value='Product'>Product</option>
       
    </select>
     

    
    <textarea className='myTextArea' value={fbInfo.fb} onChange={(e)=> setfbInfo({...fbInfo, fb: e.target.value})}></textarea>
    <br></br>
    <button className='mySubmit' onClick={submitFB}>Submit</button>


    {/* {props.map((fbList)=> {
        return <div key={fbList.id}><h1>{fblist}</h1></div>

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

const mapStateToProps = (reduxState) =>{
    return reduxState.fbReducer
    
    }

export default connect(mapStateToProps, {postFB, updateUser})(MyFeedback)
