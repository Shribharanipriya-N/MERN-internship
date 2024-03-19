import React, { useEffect, useState } from 'react'
import ExpenseCard from './components/ExpenseCard';
import ExpenseForm from './components/ExpenseForm';
const expensedata=[
  {
    id:1,
    title:"Salary",
    amount:100000,
  },
  {
    id:2,
    title:"Snacks",
    amount:-1000,
  },
  {
    id:3,
    title:"Food",
    amount:-4000,
  },
  {
    id:4,
    title:"House Rent Revenue",
    amount:10000,
  }
]
const App = () => {
  const [list,setList]=useState([]);
  const [editid,seteditid]=useState();
  const [update,setupdate]=useState(1);
  let income=0;
    let expense=0;
    
    const itemtoedit=list.find((item)=>
      item.id===editid)
    console.log(itemtoedit);
    list.forEach((item)=>{
      if(item.amount>0){
        {income+=Number(item.amount)}
      }
      else{
        {expense+=Number(item.amount)}
      }
    })
   
    const deleteexpense=(id)=>{
     console.log("deleted ",id);
     const result= list.filter((item)=>{
         return item.id!=id;
      })
  //  setList(result);
   //this method may cause error
   // to solve it
   setList([...result])
    }

    const additem=(title,amount)=>{
    // const newitem={
    //   id: list[list.length-1].id+1,
    //   title:title,
    //   amount:amount
    // };
    // setList([...list,newitem]);
    fetch('http://localhost:5000/add-expenses',
      {
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          categor:title,
          amount:parseInt(amount),
          date:'14-03-2024'
        })
      }).then((res)=>{
        setupdate(update+1);
      })
    }

    const edititem=(title,amount)=>{
     const res= list.map((item)=>{
        if(item.id===editid){
           item.title=title;
           item.amount=parseInt(amount);
        }
        return item;
      })
      setList([...res])
      seteditid(null);
    }

    useEffect(()=>{
      fetch("https://localhost:5000/get-expenses")
      .then((json)=>{
        setList(json);
      })
    },[update])
  return (
    <>
    <div className='container'>
    <h1>Expense Tracker</h1> 
    <div className='card'>
      <div>
        <h3>Income</h3>
        {income}
      </div>
      <div>
        <h3>Expense</h3>
        {-1*expense}
      </div>
    </div>
    <ExpenseForm additem={additem} itemtoedit={itemtoedit} edititem={edititem}/>
    <h2>History</h2>
   {list.map((data)=>{
      return <ExpenseCard key={data.id} expense={data} deleteexpense={deleteexpense} seteditid={seteditid}/>
    })
  }
    </div> 
    </>
  )
}

export default App
