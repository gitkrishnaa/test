const login_user=require("../db_model/login_user")
const expense_record=require("../db_model/expense_record")
const transaction_model=require("../db_model/transaction_model")



module.exports.User_all_Data=(req,res)=>{
    //req.user assign in authenticate 

    console.log(req.body,"user data >>>>>>>>")

login_user.findAll({where:{id:1}})
.then(a=>{console.log(a)})
   
    login_user.findAll({
        where:{id:req.user.user_id},
        include:[expense_record,transaction_model]
    }).then((a)=>{
        res.send(a)
    })
    .catch((err)=>{
res.send({err})
    })
    console.log(req.user)
    
    console.log("hello")




}