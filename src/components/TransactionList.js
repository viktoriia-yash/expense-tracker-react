import React from "react";

const TransactionList = () => {
  return (
    <div>
      <h4>History</h4>
      <ul className="transaction-list">
        <li className="minus-transaction">
          Gacha Game Monthly Card <span>-$5.99</span>{" "}
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </div>
  );
};

export default TransactionList;
