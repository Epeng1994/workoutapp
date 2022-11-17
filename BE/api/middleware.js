const db = require('../data/dbConfig');
const model = require('./model');

async function uniqueDate(req,res,next){
    const date = req.params.date
    model.findWorkoutByDate(date)
        .then(result=>{
            res.json(result)
        })
        .catch(error=>{
            res.status(404).json(error)
        })
}


module.exports = {
    uniqueDate
}