import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <div className="add-transaction">
      <h4 className="title">Add New Transaction</h4>
      <form className="new-transaction-container" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            className="text-transaction"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount (+ / -)</label>
          <input
            type="number"
            placeholder="Enter amount..."
            className="amount-transaction"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="add-transaction-btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
