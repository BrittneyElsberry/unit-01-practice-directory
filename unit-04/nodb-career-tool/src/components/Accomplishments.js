import React, {Component} from 'react'
import Main from './Main'


class Accomplishments extends Component{
constructor(){
    super()
    this.state = {

    }
}

render(){
    return(
        <div className="AccompContainer"> 
            <h1>Accomplishments</h1>
            <input className="AccompInput" type="text" placeholder="write out examples of when you specifically met their qualification"></input>
            <div></div>

        </div>
    )
}


}

export default Accomplishments