import React, { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h4>Add New Transaction</h4>
      <form className="new-transaction-container">
        <div className="form-control">
          <label htmlFor="text" id="text">
            Text
          </label>
          <input
            type="text"
            placeholder="Enter text..."
            className="text-transaction"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (negative - expense, positive - income)
          </label>
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
