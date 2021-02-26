module.exports = {

    createFB: (req, res) =>{

        const db = req.app.get('db')
        const {id} = req.session.user
        const {feedback, categoryId} = req.body
        const {deptId} = req.query
        const date = new Date 
        if(id){
            db.feedback([categoryId, deptId, id, feedback, date])
            return res.status(200)

        } else {
            return res.status(403)
        }       

    }

}