module.exports = {
    retrieveTeam: async (req, res)=>{
        const {dept_number} = req.session.user

        const db = req.app.get('db')
        const team = await db.retrieveteam([dept_number])
        res.status(200).send(team)

    },

    retrieveIndividualFB: async (req, res)=> {

        let {user_id} = req.params.id
        const db = await req.app.get('db')
        const fbList = await db.readfeedback([user_id])
        console.log(fbList, 'controller')
        res.status(200).send(fbList)
    }
}