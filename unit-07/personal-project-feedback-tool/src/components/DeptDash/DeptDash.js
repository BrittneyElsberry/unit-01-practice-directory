import React, {useState} from 'react'
import axios from 'axios'
import './DeptDash.css';
import {connect} from 'react-redux'
// import {updateUser} from '../../redux/authReducer'


const DeptDash = (props)=>{

    const [deptName, setDeptName] = useState('')

console.log(props)
return(

    <div><h1>Welcome to the {deptName} Dashboard</h1>
    {props.username}
    </div>
)

}



export default connect((s)=> s) (DeptDash) 
//put redux state onto our props 

