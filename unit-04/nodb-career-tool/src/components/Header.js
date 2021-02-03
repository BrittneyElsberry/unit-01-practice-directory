const Header = (props)=>{



return <div className="headerContainer">

   <h1 className="roleHeader">My Next Role </h1> 
   <input className="jobTitleInput" value={props.myNextRole} onChange={(e)=>props.handleRoleChange(e)}/> 
   <br></br>
   <button className="myRoleButton" onClick={()=>props.postMyRole(props.myNextRole)}>Save</button>
   <br></br>
    <h1>{props.savedRole}</h1>


    </div>

}

export default Header;