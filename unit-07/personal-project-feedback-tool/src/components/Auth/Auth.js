import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Auth.css';

const Auth =(props)=>{

return (<div>
    

<form className='loginForm'>
 Username: <input className='unInput'/>
 Password: <input className='passInput'/>
<button className='authbtn'>Login</button>
<button className='authbtn'>Register</button>
</form>

</div>)


}

export default Auth