import React from 'react'

const ExpenseCard = (props) => {
    const {id,catogory,amount}=props.expense;
    const{deleteexpense,seteditid}=props;
    const cardclass=amount>0?"positive":"negative";
const handledelete=()=>{
  deleteexpense(id);
}

const handleEdit=()=>{
  
  seteditid(id);
}
    
  return (
    <>
    <div className='items-card'>
      <div className={`items ${cardclass}`} >
      <div><h3>{category}</h3></div>
      <div>
      {amount}
      </div>
      <div className='icons'>
        <button onClick={handledelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
      </div>
      </div>
    </>
  )
}

export default ExpenseCard
