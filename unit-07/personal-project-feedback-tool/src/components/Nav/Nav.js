import {useState, useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {logout} from '../../redux/authReducer'
import {updateUser} from '../../redux/authReducer'
import {Link, withRouter} from 'react-router-dom'


const Nav = (props)=> {



    console.log(props)

    return (
        
        props.location.pathname !== '/' && 
        <div className='nav'>
        <div className='nav-profile-container'>
          <div className='nav-profile-pic' ></div>
          <p>{props.initialState}</p>
        </div>


        <div>
          

            <div className='nav-links'>
            <Link to="/deptdash"><li className='nav-item' alt='department dashboard'>Department Dashboard</li></Link>  
            <Link to='/companydash'><li className='nav-item' alt='my feedback'>Company Dashboard</li> </Link>
            <Link to='/myfeedback'><li className='nav-item' alt='my feedback' >My Feedback</li></Link>
          </div>
        <Link to='/' onClick={logout}><li className='nav-item logout' alt='logout'>Logout</li></Link>
        </div>
                
          
        </div>
    )



}

const mapStateToProps = (reduxStore) => {
    return reduxStore
}

export default withRouter (connect(mapStateToProps, {updateUser, logout})(Nav))