//let myRole = ''

const job = require('./jobListing.json')

let careerSkills = [{id: 0, skills: ''}]
let id = 1;



//let goals = [{id:0, goal: '', startDate: '', endDate: '', complete: false}]

module.exports = {

getSkills: (req, res)=> {
    res.status(200).send(careerSkills)
},

addSkills: (req, res)=> {
    const {skills} = req.body
    const newSkill = {id, skills}
    careerSkills.push(newSkill)
    id++
    res.status(200).send(careerSkills)
},

editSkills: (req, res)=>{

    res.status(200).send(deleteSkills)
},

deleteSkills: (req, res)=> {

    res.status(200).send(deleteSkills)
},

getJobListing: (req, res)=> {
    res.status(200).send(job)
}




}