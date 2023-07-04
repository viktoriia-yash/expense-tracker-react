import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="history-container">
      <h4 className="title">History</h4>
      <div className="history-transaction">
        <ul className="history">
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionList;
