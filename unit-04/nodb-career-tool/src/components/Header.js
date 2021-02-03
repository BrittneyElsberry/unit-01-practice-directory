const Header = (props)=>{



return <div className="headerContainer">

   <h1 id="roleHeader">My Next Role </h1> 
   <br></br>
   <input id="jobTitleInput" value={props.myNextRole} onChange={(e)=>props.handleRoleChange(e)}/> 
   <br></br>
   <button className="myRoleButton" onClick={()=>props.postMyRole(props.myNextRole)}>Save</button>
   <br></br>
   <br></br>
    <h1 id="jobTitleDisplayed">{props.savedRole}</h1>


    </div>

}

export default Header;