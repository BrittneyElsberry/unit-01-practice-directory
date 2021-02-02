let myRole = ''

const job = require('./jobListing.json')

let careerSkills = []
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
    const {skills} = req.body
    const {id} = req.params
    const findId = careerSkills.findIndex(skill => skill.id === +id)
    careerSkills[findId] = {...careerSkills[findId], skills: skills}
    res.status(200).send(careerSkills)
},

deleteSkills: (req, res)=> {
    const {id} = req.params
    const findId = careerSkills.findIndex(skill => skill.id === +id)
    careerSkills.splice(findId, 1)
    res.status(200).send(careerSkills)
},

getJobListing: (req, res)=> {
    res.status(200).send(job)
},

getMyRole: (req, res)=> {
    res.status(200).send(myRole)
}




}