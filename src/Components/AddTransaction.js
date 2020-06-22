import React from 'react';

export const AddTransaction = () => {
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form>
        <div className='form-control'>
          <label htmlfor='description'>Description</label>
          <input type='text' placeholder='Detail of Transaction' />
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
