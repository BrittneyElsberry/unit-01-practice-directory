import React, {Component} from 'react'
import Main from './Main'


const JobListing = (props)=> {
console.log(props)
  
    return (
        <div className="jobListingContainer">
            <h1>Job Listing</h1>
            <br></br>


            <h2>Company: {props.jobListing.company}</h2>
            <span>Job Title: {props.jobListing.jobtitle}</span>
            <p>About: {props.jobListing.about}</p>
            <br></br>
            <p>Responsibilities: {props.jobListing.responsibilities}</p>
            <br></br>
            <p>Skill Requirements: {props.jobListing.skillrequirements}</p>
            <br></br>
            <p>Technical Knowledge Requirements: {props.jobListing.technicalknowledgerequirements}</p>
            <br></br>
            <p>Employement Type: {props.jobListing.employmenttype}</p>
            <br></br>
            <p>Seniority Level: {props.jobListing.senioritylevel}</p>
            <br></br>
        </div>
    )

}

export default JobListing
