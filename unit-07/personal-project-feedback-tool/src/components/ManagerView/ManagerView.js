import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './ManagerView.scss';
// import {connect} from 'react-redux'
// import {updateUser} from '../../redux/authReducer'


const BASE_URL = 'https://dummyapi.io/data/api/'
const APP_ID = '60392ea1b2517899d47d9dc9'

const ManagerView = ()=>{


const [directory, setDirectory] = useState([])

useEffect(()=>{

axios.get(`${BASE_URL}user`, {headers: {'app-id': APP_ID}})
.then((res)=> {setDirectory(res.data.data)
    console.log(res.data.data)

}).catch(err=> console.log(err))

}, [])


return(

    <div><h1>My Team</h1>
    
    <ul> 
        
        {directory.map((employeeD)=>{
            return <div key={employeeD.id}><h2>{employeeD.firstName} {employeeD.lastName}<br></br></h2></div>
        })}
    </ul>
    
    
    </div>

)

}

export default ManagerView