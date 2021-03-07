import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './MyFeedback.scss';
import {connect} from 'react-redux'
import {postFB} from '../../redux/fbReducer'
import {updateUser} from '../../redux/authReducer'
import {Redirect} from 'react-router-dom'
import Edit from '../Edit/Edit'
import {useParams} from 'react-router-dom'

const MyFeedback = (props)=>{


const [fbInfo, setfbInfo] = useState({
    selectCategory: 'Internal Process',
    fb: '',
})

const [isChecked, setIsChecked] = useState(false)
const {user_id} = useParams()


useEffect(()=>{
    props.postFB() 
}, [fbInfo]) 


const {params} = props

// Protected Route if the user is not logged in.
if(!props.username){
    return <Redirect 
    to={{
     pathname: '/',
     state: {from: props.location}   
    }}/>
}   



//This function sends the fbInfo from state to the createFB function in the fbController.js 
//The feedback is sent to the feedback table and then returned to this function to 
const submitFB =(formSubmit)=>{
    formSubmit.preventDefault()
    let result


    if(isChecked===true){
        let result = window.confirm(
            `Are you sure you want to submit this anonymously? 
    
        Please make sure your feedback is specific and actionable. 
        There will be no way for leadership to ask follow up questions. 
    
        If you\'d like to add more detail, please click cancel
        and add more information. Thank you! :)`)
        if (result === true){
            axios.post('/myfeedback/anonymous', fbInfo)
            .then((res)=>{
                props.postFB(res.data)
                setfbInfo({fbInfo: {selectCategory: '', fb: []}})
    
            }).catch((err)=> console.log(err))
        }
      
    } else if (result === false){
       return  console.log('waiting for changes from the user before submit')
    }

    else if (isChecked === false){
        axios.post('/myfeedback/submit', fbInfo) //sending fbInfo to fbcontroller.js createFB function
        .then((res)=> {
            props.postFB(res.data) //this is receiving the data from the feeback table
          
            setfbInfo({fbInfo: {selectCategory: '', fb: []}})
            console.log(fbInfo.fb)
         
       
       }).catch((err)=> console.log(err)) 
    }
    }


const deleteFeedback = (id) => {
    axios.delete(`/myfeedback/${id}`)
    .then(_=> props.postFB())
}

console.log(props, 'feedback props..what you look like??')

return(
  
    <div className='fbpageparent'>
        <div className='myFeedbackContainer'>
      {/* <h1>Do you have a great idea?</h1>   */}

      <form onSubmit={submitFB}>

    
    <div className='fbcategory'>
          
    <select className='dropDownMenu' value={fbInfo.selectCategory} onChange={(e)=> setfbInfo({...fbInfo, selectCategory: e.target.value})} >
        <option value='default'>Select Feedback Category</option>
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

    <div className='anonheaderContainer'>
    <div className='anonheader'>
    
    <label>Submit Anonymously?</label>

    <input 
    className='checkbox'
    type='checkbox'
    checked ={isChecked}
    onChange={(e)=> {setIsChecked(e.target.checked)}}
    />
    
   
    </div>
    <button className='mySubmitbtn'>Submit</button>
    </div>

    <br></br>
    </form>
    </div>


    

<div className='fbListContainer'>
    {/* <div className='list'> */}
        {props.feedback.map((elem)=>{
            return  <div className="fb-box" key={elem.feedback_id}>
                
                    
                    <li className='liststyle'><div className='catName'>{elem.category_name}</div> <p className='text'>{elem.feedback}</p>
                    <Edit deleteFeedback={deleteFeedback} feedback_id={elem.feedback_id}/></li>
                   
                    </div>})}
                    {/* </div> */}
    </div>
</div>

    )
    }
export default connect((s)=> ({
    ...s.fbReducer,
    ...s.authReducer

}), {postFB})(MyFeedback)


