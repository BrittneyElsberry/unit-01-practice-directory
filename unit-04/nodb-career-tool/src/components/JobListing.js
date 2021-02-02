import React, {Component} from 'react'
import Main from './Main'


const JobListing = (props)=> {
console.log(props)
  
    return (
        <div className="jobListingContainer">
            <h1 className="jlheader ">Job Listing</h1>
            <br></br>
            <p>Company: </p> {props.jobListing.company}
            <br></br>
            <br></br>
            <p className="descrip">Job Title:</p> <span className="jobContent">{props.jobListing.jobtitle}</span>
            <br></br>
            <br></br>
            <p className="descrip" >About: </p> <span className="jobContent">{props.jobListing.about}</span>
            <br></br>
            <br></br>
            <br></br>
            <p className="descrip">Responsibilities: </p> {props.jobListing.responsibilities}
            <br></br>
            <br></br>
            <p className="descrip"> Skill Requirements:</p> 
            <br></br>
            {/* <ul><li>{props.jobListing.skillrequirements}</li>
            <li>{props.jobListing.skillrequirements[1]}</li>
            <li>{props.jobListing.skillrequirements[2]}</li>
            <li>{props.jobListing.skillrequirements[3]}</li>
            <li>{props.jobListing.skillrequirements[4]}</li>
            <li>{props.jobListing.skillrequirements[5]}</li>
            <li>{props.jobListing.skillrequirements[6]}</li>

            </ul> */}
            <br></br>
            <p className="descrip">Technical Knowledge Requirements: </p>
            <br></br>
            {/* <ul><li>{props.jobListing.technicalknowledgerequirements[0]}</li>
            <li>{props.jobListing.technicalknowledgerequirements[1]}</li>
            <li>{props.jobListing.technicalknowledgerequirements[2]}</li>
            <li>{props.jobListing.technicalknowledgerequirements[3]}</li>
            <li>{props.jobListing.technicalknowledgerequirements[4]}</li>
            <li>{props.jobListing.technicalknowledgerequirements[5]}</li>
            <li>{props.jobListing.technicalknowledgerequirements[6]}</li>

            </ul> */}
            <br></br>
            <br></br>
            <p className="descrip">Employement Type:</p> {props.jobListing.employmenttype}
            <br></br>
            <br></br>
            <p className="descrip">Seniority Level: </p>{props.jobListing.senioritylevel}
            <br></br>
        </div>
    )

}

export default JobListing
