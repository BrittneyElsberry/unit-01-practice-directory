module.exports = {
    retrieveTeam: async (req, res)=>{
        const {dept_number} = req.session.user

        const db = req.app.get('db')
        const team = await db.retrieveteam([dept_number])
        res.status(200).send(team)

    }
}