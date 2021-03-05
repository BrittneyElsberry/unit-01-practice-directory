import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import './ManagerView.scss';



const BASE_URL = 'https://dummyapi.io/data/api/'
const APP_ID = '60392ea1b2517899d47d9dc9'

const ManagerView = ()=>{


const [directory, setDirectory] = useState([])

useEffect(()=>{

    axios.get(`/managerview/myteam`)
    .then((res)=> {
        setDirectory({directory: res.data})
        console.log(res.data, 'this worked baby!')
    
    }
        

// axios.get(`${BASE_URL}user`, {headers: {'app-id': APP_ID}})
// .then((res)=> {setDirectory(res.data.data)
//     console.log(res.data.data)

).catch(err=> console.log(err))

}, [])

console.log('this is the props looking for')

return(

    <div><h1>My Team</h1>
    
    <ul> 
        
        {directory.map((employeeD)=>{
            return <Link to={`/myfeedback/`}> <div key={employeeD.id}><h2>{employeeD.firstName} {employeeD.lastName}<br></br></h2></div></Link>
        })}
    </ul>
    
    
    </div>

)

}

export default ManagerView