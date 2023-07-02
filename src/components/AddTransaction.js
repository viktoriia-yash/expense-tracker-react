import React from "react";

const AddTransaction = () => {
  return (
    <div>
      <h4>Add New Transaction</h4>
      <form className="new-transaction-container">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            className="text-transaction"
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
          />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
