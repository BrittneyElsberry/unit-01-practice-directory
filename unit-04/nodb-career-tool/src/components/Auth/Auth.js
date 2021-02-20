import React, {useState, useEffect} from 'react'

const Auth = () =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

return (
    <div>
   <h1>Login Page</h1>
   <form>
     <p>Username</p><input />
    <p>Password</p> <input />

   </form>
  

    </div>
 
)    


}

export default Auth
