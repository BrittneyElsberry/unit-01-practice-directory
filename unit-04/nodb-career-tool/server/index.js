const express = require('express')
const app = express()
const ctrl = require('./controller')
app.use(express.json())


//End points

app.get('/api/careerSkills', ctrl.getSkills) //test in postman was successful!!
app.post('/api/careerSkills', ctrl.addSkills) //test in postman unsuccessful
app.put('/api/careerSkills', ctrl.editSkills)
app.delete('/api/careerSkills', ctrl.deleteSkills)


const port = 3333
app.listen(port, ()=> console.log(`Port listening on ${port}`))






/**
 Package.json file
{
    "Company": "iPipeline"
    "Job Title": "Associate Developer",
    "About": "We are currently looking for an Associate Developer to join a collaborative Professional Services team. As a developer in the Professional Services department, you will be responsible for working closely with your project team to deliver against business requirements for your assigned customer(s). The ability to work in a fast-paced Agile environment through development, testing, and delivery is critical to success in this role. The ideal candidate will have strong communication skills, the ability to multi-task, be dedicated to detail and quality, and foster an open work environment.",
    "Responsibilities": 
    [
        "Collaborate with internal teams to design and develop efficient web applications",
        "Participate in requirements analysis and estimation to understand deliverables and strategy",
        "Collaborate with internal teams to design and develop optimal software solutions",
        "Maintain, update, refactor and debug code",
        "Write clean, scalable code using JavaScript and .NET programming languages in adherence with iPipeline development standards and security policies",
        "UI design, development, and unit testing using iPipeline proprietary tools",
        "Create/maintain XML configuration files",
        "Source control management using TFS for project setup and deployments",
        "Create and maintain documentation",
        "Support of evening and/or weekend deployments may be required." 
     ],
     "Skill requirements" : 
     [ 
         "Attention to detail & quality", 
        "Ability to organize and prioritize multiple tasks within tight timelines and budget constraints",
        "Ability to collaborate with co-workers and customers in a fast-paced environment",
        "Strong communication and troubleshooting skills",
        "Analytical skills to comprehend requirements and make recommendations for design improvements",
        "Familiarity/experience with AGILE methodology",
        "0-3 years of relevant experience"
     ],
     "Technical Knowledge Requirements" : [
        "Adequate knowledge of object-oriented programming",
        "Proven experience working with .NET (C# or VB) web applications and debuggers",
        "Knowledge of JavaScript and JSON",
        "Experience working with XML and XSLT",
        "Basic understanding of database design and querying in SQL Server",
        "NET Web Services experience a plus",
        "Basic understanding of Insurance Industry and Products a plus"

     ],

     "Seniority Level": "Entry Level",
     "Employment Type": "Full-time",
     "Industry": "Information Technology & Services  Computer Software  Financial Services",







}


 */