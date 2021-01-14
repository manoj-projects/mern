import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GobalState'
import { Transaction } from './Transaction';

export const History = () => {
  const {transactions, getTransactions} = useContext(GlobalContext);

   useEffect(() => {
     getTransactions();
     // eslint- disable - next line react -hooks/ eshaustive deps
   }, [])

     return (
      
        <>
  <h3>History</h3>
  <ul id="list" className="list">
    {transactions.map(transaction =>(<Transaction key={transaction._id} transaction = {transaction}/>))}
    
  </ul>

        </>
    )
}
