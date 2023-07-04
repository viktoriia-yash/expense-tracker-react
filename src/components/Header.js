import React from "react";

const Header = () => {
  return (
    <>
      <h2>Expense Tracker</h2>
      <p className="credit">
        <a
          href="https://github.com/viktoriia-yash/expense-tracker-react"
          className="github"
          rel="noopener noreferrer"
          target="_blank"
        >
          Open-source code
        </a>{" "}
        by Viktoriia Yashkina
      </p>
    </>
  );
};

export default Header;
