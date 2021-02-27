import React, {useState} from 'react'
import axios from 'axios'
import './MyFeedback.scss';
import {connect} from 'react-redux'
import {postFB} from '../../redux/fbReducer'


const MyFeedback = (props)=>{

const [fbInfo, setfbInfo] = useState({
    selectCategory: '',
    fb: '',
})

const [displayfb, setDisplayFb] = useState([])




const submitFB =()=>{
 axios.post('/myfeedback/submit', fbInfo)
 .then((res)=> {
    console.log(res.data, `This is from the submitFB in MyFeedback.js`)
     setDisplayFb({dispalyfb: res.data})
}).catch((err)=> console.log(err))   

}

console.log(props)

return(
  
    <div className='myFeedbackContainer'>
    <h1>{props.username} Feedback</h1>        

    <select className='dropDownMenu' value='selectCategory' onChange={(e)=> setfbInfo({selectCategory: e.target.value})} >
        <option value='default'></option>
        <option value='Customer Experience'>Customer Experience</option>
        <option value='Internal Process'>Internal Process</option>
        <option value='Leadership'>Leadership</option>
        <option value='Product'>Product</option>
       
    </select>
     

    
    <textarea className='myTextArea' value={fbInfo.fb} onChange={(e)=> setfbInfo({fb: e.target.value})}></textarea>
    <br></br>
    <button className='mySubmit' onClick={submitFB}>Submit</button>


    {/* {displayfb.map((fbList)=> {
        return <div key={fbList.id}><h1>{fblist}</h1></div>

    })} */}
    <br></br>

    <br></br>
    <br></br>
    {/* <button>Edit</button>
    <button>Delete</button> */}
    
    
    
    </div>
)

}

export default connect((s)=> s)(MyFeedback)