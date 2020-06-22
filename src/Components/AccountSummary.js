import React from 'react';

export const AccountSummary = () => {
  return (
    <div>
      <div>
        <h3>Income</h3>
        <p className='money add'>+$0.00</p>
      </div>
      <div>
        <h3>Expense</h3>
        <p className='money minus'>-$0.00</p>
      </div>
    </div>
  );
};
