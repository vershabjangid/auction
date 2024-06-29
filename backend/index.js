const expr = require('express')
const access = expr();
const config = require('./db/config')
const cors = require('cors')
const Tournament = require('./db/Maketournament')

access.use(expr.json())
access.use(cors())

access.post('/add-tournament',async (req,res)=>{
    let tournament_info = new Tournament(req.body)
    let result = await tournament_info.save();
    res.send(result)
})

access.listen(2000)