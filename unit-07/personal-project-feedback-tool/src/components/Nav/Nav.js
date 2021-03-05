import {useState, useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {logout} from '../../redux/authReducer'
import {updateUser} from '../../redux/authReducer'
import {Link, withRouter} from 'react-router-dom'
import './Nav.scss'


const Nav = (props)=> {


    return (
        
      
        props.location.pathname !== '/' && 
     

        <div className='nav'>
        <div className='nav-profile-container'>
          <div className='nav-profile-pic' ></div>
          <p>{props.initialState}</p>
        </div>


        <div>
          
          {props.authReducer.user_admin ?

            <div className='nav-links'>
            <Link to="/managerview"><li className='nav-item' alt='Manager View'>Manager View</li></Link> 
            <Link to="/deptdash"><li className='nav-item' alt='department dashboard'>Department</li></Link>  
            <Link to='/companydash'><li className='nav-item' alt='my feedback'>Company</li> </Link>
            <Link to='/myfeedback'><li className='nav-item' alt='my feedback' >My Feedback</li></Link>
            <Link to='/' onClick={logout}><li className='nav-item logout' alt='logout'>Logout</li></Link>
          </div>
            
          
          
          :
          
          <div className='nav-links'>
            <Link to="/deptdash"><li className='nav-item' alt='department dashboard'>Department</li></Link>  
            <Link to='/companydash'><li className='nav-item' alt='my feedback'>Company</li> </Link>
            <Link to='/myfeedback'><li className='nav-item' alt='my feedback' >My Feedback</li></Link>
            <Link to='/' onClick={logout}><li className='nav-item logout' alt='logout'>Logout</li></Link>
          </div>
            
          
          
          }
        </div>
                
          
        </div>
    )



}

const mapStateToProps = (reduxStore) => {
    return reduxStore
}

export default withRouter (connect(mapStateToProps, {updateUser, logout})(Nav))