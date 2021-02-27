// let displayfb = []


module.exports = {




    createFB: async (req, res) =>{

        const db = req.app.get('db')
        // const {id} = req.session.user
        const {feedback, categoryName} = req.body
        const {id, deptId} = req.session.user
        const date = new Date 
        // let newFeedback = feedback 
        if(feedback){
            
            const [category] = await db.category([categoryName])
            await db.feedback([category.category_id, deptId, id, feedback, date])
            return res.status(200).send(feedback)
         

        } else {
            return res.status(403)
        }       

    }

}