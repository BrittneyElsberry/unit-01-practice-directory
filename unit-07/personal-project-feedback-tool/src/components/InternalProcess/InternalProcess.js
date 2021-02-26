import {useState} from 'react'



const InternalProcess = (props)=>{

return(

    <select className='department'>
        <option value='department'>Customer Care</option>
        <option value='department'>Payments and Risk</option>
        <option value='department'>Partner</option>
        <option value='department'>Tactical Operations</option>
        <option value='training'>Training</option>
        
    </select>
)

}

export default InternalProcess