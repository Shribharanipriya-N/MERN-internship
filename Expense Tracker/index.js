const express=require("express");
const mongoose=require("mongoose");
const {Expense}=require("./schema.js");
const bodyParser = require("body-parser");
const cors=require("cors");

const app=express();

app.use(bodyParser.json())
app.use(cors());
// expense tracker

// adding an new expense - /add-expense   :post
// view existing expense - /get-expense   :get
// deleting an expense - /delete-expense  :delete
// updating existing expense - /update-expense   :patch 


    async function connectdb(){
        try{
        await mongoose.connect("mongodb+srv://Bharani_Priya:Priya_1594@cluster0.z9kbeyv.mongodb.net/ExpenseTracker?retryWrites=true&w=majority&appName=Cluster0")
         console.log("db connnection success")

         //process.env.PORT
         const x=process.env.PORT || 6000;
         app.listen(x,function(){
         // console.log("Starting........."+x)
             console.log(`starting port ${x}...`)
         })
     }
     catch(err){
        console.log("db not connected: "+err);
    }
}
connectdb();

app.get('/get-expenses',async function(request,response){
    try{
        const expensesData= await Expense.find()
        response.status(200).json(expensesData);
    }
    catch(error){
response.status(500).json({
    "status":"failure",
    "message":"couldn't fetch",
    "error": error
})
console.log("ehnvghfb")
    }
   
})

app.post('/add-expenses',async function(request,response){
    try{
        await Expense.create({
            "amount": request.body.amount,
            "category":request.body.category,
            "date":request.body.date
        })
        response.status(201).json({
            "status":"success",
            "message":"entry added"
        })
    }
    catch(error){
        response.status(500).json({
            "status":"failure",
            "message":"entry not added"
        })
    }
    
})

app.delete('/delete-expenses/:id',async function(request,response){
console.log(request.params.id)
try{
    const expenseEntry=await  Expense.findById(request.params.id)
    if(expenseEntry){
    await Expense.findByIdAndDelete(request.params.id)
    response.status(201).json({
        "status":"success",
        "message":"entry deleted"
    })
    }
    else{
        response.status(404).json({
            "status":"success",
            "message":"entry not found"
        })
    }
}
catch(error){
    response.status(500).json({
        "status":"failure",
        "message":"entry not found",
        "error":error
    })
}

})


app.patch('/update-expenses/:id',async function(request,response){
    try{
        const expenseEntry=await Expense.findById(request.params.id)
        if(expenseEntry){
           await  expenseEntry.updateOne({
                "amount":request.body.amount,
                "category":request.body.category,
                "date":request.body.date
            })
        }
        else{
            response.status(404).json({
                "status":"success",
                "message":"entry not found"
            })
        }
    }
    catch(error){
        response.status(500).json({
            "status":"failure",
            "message":"entry not found",
            "error":error
        })
    }
})

