import React, { useContext } from 'react';
import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
        <>
          <h3>Transaction List</h3>
          <ul id="list" className="list">
            {transactions.map(transaction => (<Transaction key={Transaction.id} transaction={transaction} />))}
          </ul>
      </>
    )
}

export default TransactionList
