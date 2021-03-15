import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './DeptDash.scss';
import {connect} from 'react-redux'
// import {updateUser} from '../../redux/authReducer'

import {Bar} from 'react-chartjs-2'


const DeptDash = (props)=>{

    const [deptName, setDeptName] = useState('')
    const [catChartData, setCatChartData] = useState({})
    const [resChartData, setResChartData] = useState({})

    const [category, setCategory] = useState({})

    
    useEffect(()=>{

        // stackedBar()
        axios.get(`/chart`)
        .then( res=> {setCategory(res.data)
        console.log(res.data, 'this is coming through in the useEffect')
        })
        .catch(err=> console.log(err))

    

    }, [])



    const stackedBar = ()=> {
        setCatChartData({
        labels: ['Customer Experience', 'Internal Process', 'Leadership', 'Product'],
        datasets: [{
            label: 'Department Feedback by Category',
            data: ()=>{
            return {
                labels: [],
                confirmed: []
            }    
            } ,
            backgroundColor: ['#9a8c66'],
            borderWidth: 2

        }]    


        })
        setResChartData({
            labels: ['Customer Experience', 'Internal Process', 'Leadership', 'Product'],
            datasets: [{
                label: 'Department Feedback by Category',
                data: [1, 2, 45, 7],
                backgroundColor: ['#9a8c98'],
                borderWidth: 2
    
            }]  

        })

    }






console.log(props)
return(

    <div className='deptDashContainer'><h1 className='welcome'>Welcome to the {deptName} Dashboard {props.username}!</h1>
  
    <div className='fiscalYearContainer'>
    <h2 className='fiscalYear'>Fiscal Year 2021</h2>
    <br></br>
    <select className='qtrContainer'>
    <option>Q1</option>
    <option>Q2</option>
    <option>Q3</option>
    <option>Q4</option>

    </select>
    </div>

    <div className='chart'>
       <Bar data={catChartData} options={{
           responsive: true,
           scales: {
               yAxes: [{
                   ticks: {
                       autoSkip: true,
                       maxTicksLimit: 10,
                       beginAtZero: true
                   }, 
                   gridLines: {
                       display: false,
                       stacked: true
                   }
               }],
               xAxes: [{
                   gridLines: false,
                   stacked: true
               }]
           }
       }} /> 

    {/* <Line data={resChartData} options={{
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10,
                        beginAtZero: true
                    }, 
                    gridLines: {
                        display: false
                    }
                }],
                xAxes: [{
                    gridLines: false
                }]
            }
        }} />  */}



    </div>

    </div>
)

}



export default connect((s)=> s) (DeptDash) 
//put redux state onto our props 

