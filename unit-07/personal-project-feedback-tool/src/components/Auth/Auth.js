import React, {useState} from 'react'
import axios from 'axios'
import './Auth.css';
import {connect} from 'react-redux'
import {updateUser} from '../../redux/authReducer'

const Auth =(props)=>{

const [userInfo, setUserInfo] = useState({
    userId: 0,
    username: '',
    password: '',
    deptNumber: 0,
    isAdmin: false
})    


const register = ()=>{

    axios.post('/auth/register', {setUserInfo})
    .then(res=>{
        this.props.updateUser(res.data)
        this.props.history('/deptdash')
    }).catch(err=> alert(err))

}

const login = ()=> {


}




return (<div>
    

<form className='loginForm'>

<button className='authbtn'>Login</button>
<button className='authbtn' onClick={register}>Register</button>

 Username: <input className='unInput'/>
 Password: <input className='passInput'/>
 Department Number: <input className='deptInput'/>
 Admin: <input className='adminInput'/>

</form>

</div>)


}

export default connect (null, {updateUser})(Auth)