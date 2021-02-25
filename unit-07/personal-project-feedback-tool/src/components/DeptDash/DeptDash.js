import React, {useState} from 'react'
import axios from 'axios'
import './DeptDash.scss';
import {connect} from 'react-redux'
// import {updateUser} from '../../redux/authReducer'


const DeptDash = (props)=>{

    const [deptName, setDeptName] = useState('')

console.log(props)
return(

    <div><h1 className='welcome'>Welcome to the {deptName} Dashboard {props.username}!</h1>
  

    <h2>Fiscal Year</h2>

    </div>
)

}



export default connect((s)=> s) (DeptDash) 
//put redux state onto our props 

