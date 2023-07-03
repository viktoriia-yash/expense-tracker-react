import React from "react";

const Transaction = ({ transaction }) => {
  return (
    <li className="minus-transaction">
      {transaction.text} <span>-$5.99</span>{" "}
      <button className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
