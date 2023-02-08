const db = require('../../data/dbConfig');
const model = require('./model');

async function uniqueDate(req,res,next){
    const date = req.body.date
    const id = req.params.id
    model.findWorkoutByDate(id,date)
        .then(result=>{
            if(result.length>0){
                return res.status(400).json(`You've already logged that day`)
            }else{
                req.result = {"user_id":id,"date":date}
                next()
            }
        })
        .catch(error=>{
            res.status(404).json(error)
        })
}


module.exports = {
    uniqueDate
}