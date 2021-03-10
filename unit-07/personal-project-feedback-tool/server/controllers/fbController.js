const nodemailer = require('nodemailer')



module.exports = {

    createFB: async (req, res) =>{

        const db = req.app.get('db')
        const {fb, selectCategory} = req.body
        const {user_id, dept_number} = req.session.user
        const date = new Date 

        console.log(req.body)

        if(fb){
            
            const [category] = await db.category([selectCategory])
            const [dept] = await db.department([dept_number])
            const [feedback] = await db.feedback([category.category_id, dept.dept_id, user_id, fb, date])

            
            return res.status(200).send(feedback) 
         

        } else {
            return res.status(403)
        }       
    }, 



    createAnonymous: async (req, res) => {

        const db = req.app.get('db')
        const {fb, selectCategory} = req.body
        const {dept_number} = req.session.user //removed user_id
        const date = new Date
        


        console.log(req.body)

        if(fb){
            
            const [category] = await db.category([selectCategory])
            const [dept] = await db.department([dept_number])
            const [feedback] = await db.anonymous_fb([fb, dept.dept_id, category.category_id, date])

            
            return res.status(200).send(feedback) 
         

        } else {
            return res.status(403)
        }       

    },



    readFB: async  (req, res)=> {

        let {user_id} = req.session.user 
        const db = await req.app.get('db')
        const fbList = await db.readfeedback([user_id])
        // console.log(fbList, 'controller')
        res.status(200).send(fbList)
 
    },

    updateFB: async (req, res) => {
        // let {user_id} = req.session.user
        let {userInput} = req.body
        let {id} = req.params
        // console.log(req.params, req.body)

        const db = await req.app.get('db')
        await db.editfeedback([userInput, id])
        // const fbList = await db.readfeedback([user_id])

        res.sendStatus(200)



    },

    deleteFB: async (req, res) =>{
        const db = req.app.get('db')
        await db.deletefeedback(req.params.id)
        .then(_=> res.sendStatus(200))

    },


    confirmationEmail: async (req, res)=>{

        try{

            let {username} = req.session.user
            let {fb, selectCategory} = req.body
            // console.log(req.body, 'req.body')

            let transporter = nodemailer.createTransport({

            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            },
                // sendMail: true,
                //  port: 465,
                 
    
            })


            let sending = await transporter.sendMail({
                from: ' "Test Employee" <testnodemailerprojects@gmail.com>',
                to: ' "Test Manager" <testnodemailerprojects@gmail.com>',
                subject: ` ${username} submitted new feedback!`,
                text: `${fb}`,
                html: `

                     <h2>See what your team member had to say:</h2>
                     <h3> feedback category: ${selectCategory}
                    <p>:
                    "${fb}"
                    </p>
                     `
                    }, (err) => {
                        if(err){
                            console.log(err)
                            res.sendStatus(500)
                        } else {
                            res.status(200).send(sending)
                        }

                        
                    })
    
             }
        catch (err){
            console.log(err)
            }
    }
    
}

