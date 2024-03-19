const mongoose=require("mongoose")

const ETschema=new mongoose.Schema({
    amount:{
        type: Number
    },
    category:{
        type: String
    },
    date:{
        type:String
    }
})

const Expense=mongoose.model("expensedetails",ETschema)

module.exports={Expense}