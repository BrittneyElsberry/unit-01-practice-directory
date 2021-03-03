
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
        // let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate() 


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
        console.log(fbList, 'controller')
        res.status(200).send(fbList)
 
    },

    updateFB: (req, res) => {

    },

    deleteFB: (req, res) =>{
        const {feedback_id} = req.params.id
        req.app.get('db').deletefeedback(feedback_id)
        .then(res.sendStatus(200))
    }

    
}

