import React, {useState} from 'react'
import axios from 'axios'
import './Auth.scss';
import {connect} from 'react-redux'
import {updateUser} from '../../redux/authReducer'
// import {useHistory} from 'react-router-dom'

const Auth =(props)=>{

const [userInfo, setUserInfo] = useState({
    userId: 0,
    username: '',
    password: '',
    dept_number: 0,
    // isAdmin: false
})    


const register = ()=>{

    axios.post('/auth/register', userInfo)
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
    props.history.push('/deptdash')
})

}

return (

<div><h1>Increase employee engagement</h1>
<div className='backgroundAuth'>
<div className='authContainer'>
    
<div className='authBtnContainer'>
<button className='authbtn'onClick={login}>Login</button>
<button className='authbtn' onClick={register}>Register</button>
</div>


<div className='authInputFieldContainer'>
 Username: <input 
    type='text'
    placeholder='username'
    className='unInput'
    value={userInfo.username}
    onChange={(e)=>setUserInfo({...userInfo, username: e.target.value})}

 />

 Password: <input 
    type='text'
    placeholder='password'
    className='passInput'
    value={userInfo.password}
    onChange={(e)=>setUserInfo({...userInfo, password: e.target.value})}
 
 />
 
 
 
 Department Number: <input 
 
    type='text'
    placeholder='department number'
    className='deptInput'
    value={userInfo.deptNumber}
    onChange={(e)=>setUserInfo({...userInfo, deptNumber: e.target.value})}
 
 />
 {/* Admin: <input 
    type='text'
    placeholder='department number'
    className='adminInput'
    value={userInfo.admin}
    onChange={(e)=>setUserInfo({...userInfo, admin: e.target.value})}

 /> */}

 </div>
</div> </div> </div>)


}

export default connect (null, {updateUser})(Auth)