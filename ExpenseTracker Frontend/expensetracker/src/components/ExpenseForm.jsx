import React, { useEffect, useState } from 'react'


const ExpenseForm = (props) => {
    const {additem,itemtoedit,edititem}=props;
    const [title,settitle]=useState("");
    const isedit=itemtoedit!=undefined;
    const[amount,setamount]=useState(0);
    const handleTitleChange=(e)=>{
       settitle(e.target.value);
    }
   
    
    const handleAmountChange=(e)=>{
        setamount(e.target.value);
    }
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        isedit?edititem(title,amount):additem(title,amount);
    }
    
    useEffect(()=>{
        settitle(itemtoedit?.title||"");
        setamount(itemtoedit?.amount||"");

        
    },[itemtoedit])
  return (
    <div>
        <h1>{isedit?"Edit ":"Add New "}Transaction</h1>
        <div className='add-money'>
        <div>
          <h3>Title</h3>
          <input type="text" id='title' placeholder='Enter Title' value={title} onChange={handleTitleChange}/>
          <h3>Amount</h3>
          <input type="text" id='amount' placeholder='Enter Amount' value={amount} onChange={handleAmountChange}/>
          <button type='submit' onClick={handleSubmit}>{!isedit?"Add":"Save"}</button>
          </div>
        </div>
       </div>
  )
}

export default ExpenseForm
