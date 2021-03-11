import React, {useState} from 'react'
import axios from 'axios'
import './Auth.scss';
import {connect} from 'react-redux'
import {updateUser} from '../../redux/authReducer'
// import VisibilityToggler from './VisibilityToggler' //will implement later
// import {useHistory} from 'react-router-dom'

const Auth =(props)=>{

const [userInfo, setUserInfo] = useState({
    userId: 0,
    username: '',
    password: '',
    dept_number: 0,
  
})    

const [user_admin, setuser_admin] = useState(false)
const [toggleLogin, setToggleLogin] = useState(false)
const [toggleRegister, setToggleRegister] = useState(false)




const register = ()=>{

    axios.post('/auth/register', {...userInfo, user_admin})
    .then(res=>{
        props.updateUser(res.data)
        // setUserInfo(res.data) leaving this component so don't need to update local state
        props.history.push('/deptdash')
    }).catch(err=> alert(err))

}

const login = ()=> {
axios.post('/auth/login', userInfo)
.then(user => {
    props.updateUser(user.data)
    // setUserInfo(user.data) 
    props.history.push( props.location.state ? props.location.state.from : '/deptdash')
})

}


const displayLoginForm = ()=> {
setToggleLogin(true)
setToggleRegister(false)


}

const displayRegisterForm = ()=> {
    setToggleRegister(true)
    setToggleLogin(false)
    }
    


return (



<div className='backgroundAuth'>

<div className='employeeEngagement'>
<p>Welcome to the feedback Hub! </p>
<br></br>

<div className='flexauthbtn'>
<button
className='authbtn'
onClick={(e)=>displayLoginForm(e)}

>Login</button>

<button
className='authbtn'
onClick={(e)=>displayRegisterForm(e)}

>Register</button>

</div>




</div>


{ toggleLogin ? (

<div className='authContainer'>
<div className='authInputFieldContainer'>
 <p className='labelText'>Username:</p><br></br> 
    
    <input 
    type='text'
    className='unInput'
    value={userInfo.username}
    onChange={(e)=>setUserInfo({...userInfo, username: e.target.value})}

 />
 <br></br>

<p className='labelText'>Password:</p><br></br> 
    
    <input 
    type='text'
    className='passInput'
    value={userInfo.password}
    onChange={(e)=>setUserInfo({...userInfo, password: e.target.value})}
 
 />
  <br></br>

{/* <p className='labelText'>Are you a Manager? :</p> 
    
    <input 
    type="checkbox" 
    className="adminCheckbox" 
    checked={user_admin}
    onChange={(e)=>{setuser_admin(e.target.checked)}} />  */}
 
 
 <br></br>
 {/* <p className='labelText'>Department Number:</p><br></br> 
 
    <input 
    type='text'
    className='deptInput'
    value={userInfo.dept_number}
    onChange={(e)=>setUserInfo({...userInfo, dept_number: e.target.value})} */}
 
 {/* /> */}

<br></br>

<div className='authBtnContainer'>
<button className='authbtn'onClick={login}>Login</button>
{/* <button className='authbtn' onClick={register}>Register</button> */}
</div>

<br></br>
{/* <p className='labelText'>Already have an account?</p> */}
<br></br>
{/* <button className='authbtn'>Login</button> */}

 </div> 
</div> 
)
:
<div>


</div>

}


{ toggleRegister ? 


<div className='authContainer'>
<div className='authInputFieldContainer'>
 <p className='labelText'>Username:</p><br></br> 
    
    <input 
    type='text'
    className='unInput'
    value={userInfo.username}
    onChange={(e)=>setUserInfo({...userInfo, username: e.target.value})}

 />
 <br></br>

<p className='labelText'>Password:</p><br></br> 
    
    <input 
    type='text'
    className='passInput'
    value={userInfo.password}
    onChange={(e)=>setUserInfo({...userInfo, password: e.target.value})}
 
 />
  <br></br>

<p className='labelText'>Are you a Manager? :</p> 
    
    <input 
    type="checkbox" 
    className="adminCheckbox" 
    checked={user_admin}
    onChange={(e)=>{setuser_admin(e.target.checked)}} /> 
 
 
 <br></br>
 <p className='labelText'>Department Number:</p><br></br> 
 
    <input 
    type='text'
    className='deptInput'
    value={userInfo.dept_number}
    onChange={(e)=>setUserInfo({...userInfo, dept_number: e.target.value})}
 
 />

<br></br>

<div className='authBtnContainer'>
{/* <button className='authbtn'onClick={login}>Login</button> */}
<button className='authbtn' onClick={register}>Register</button>
</div>

<br></br>


 </div> 
</div> 

: 

<div><h1>testing testing</h1></div>



}



</div> )


}

export default connect (null, {updateUser})(Auth)