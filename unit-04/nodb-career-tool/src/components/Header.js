const Header = (props)=>{



return <div className="headerContainer">

   <h1 className="roleHeader">My Next Role:</h1> <input className="jobTitleInput" onChange={(e)=>props.handleRoleChange(e.target.value)}/> 
   
   <button onClick={()=>props.displayRole(props.myNextRole)}>Save</button>
    <p>{props.myNextRole}</p>
    </div>

}

export default Header;