import React, {useState} from 'react'
import axios from 'axios'
import './CompDash.css';
// import {connect} from 'react-redux'
// import {updateUser} from '../../redux/authReducer'


const CompDash = (props)=>{



return(

    <div><h1>You've been redirected to the Company Dashboard page.</h1>
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

export default CompDash