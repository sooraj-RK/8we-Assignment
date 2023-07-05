const db=require('./db.js')


const addData=(prompt,Response)=>{
    return db.insertOne.then(result=>{
        if(!result){
            return{
                statusCode:404,
                message:"Data upload unsuccessful"
            }
        }
        else{
            // create object of employee model for new employee
            const newData=new db.Datas({
               prompt,
               Response
            })
            // save the object in db
            newData.save()
            return{
                statusCode:200,
                message:"Data added successfully"
            }
        }
    })

}


module.exports = addData
