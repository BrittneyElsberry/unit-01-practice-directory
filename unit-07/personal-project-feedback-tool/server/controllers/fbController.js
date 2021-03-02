// let displayfb = []


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

    }

}