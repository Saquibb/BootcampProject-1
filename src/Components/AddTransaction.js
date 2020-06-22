import React, { useState } from 'react';

export const AddTransaction = () => {
  const [description, setDescription] = useState('');
  const [transactionamount, setTransactionAmount] = useState(0);
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form>
        <div className='form-control'>
          <label htmlfor='description'>Description</label>
          <input type='text'  
          id="description"
           value=(description) 
           onChange={(e) => setDescription(e.target.value)}
           placeholder='Detail of Transaction' />
        </div>
        <div className='form-control'>
          <label htmlFor='transactionamount'>transactionamount</label>
          <input type='number' placeholder='Dollar Value of Transaction' />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </div>
  );
};
