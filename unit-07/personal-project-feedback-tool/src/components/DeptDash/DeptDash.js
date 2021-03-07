import React, {useState} from 'react'
import axios from 'axios'
import './DeptDash.scss';
import {connect} from 'react-redux'
// import {updateUser} from '../../redux/authReducer'


const DeptDash = (props)=>{

    const [deptName, setDeptName] = useState('')

console.log(props)
return(

    <div className='deptDashContainer'><h1 className='welcome'>Welcome to the {deptName} Dashboard {props.username}!</h1>
  

    <h2>Fiscal Year 2021</h2>
    <select>
    <option>Q1</option>
    <option>Q2</option>
    <option>Q3</option>
    <option>Q4</option>

    </select>

    </div>
)

}



export default connect((s)=> s) (DeptDash) 
//put redux state onto our props 

