module.exports = {
    chartData: async (req, res)=> {
        const db = req.app.get('db')
        const charts = await db.readchart([])
        console.log(charts, 'chart data in controller function')

        return res.status(200).send(charts)

    }
}