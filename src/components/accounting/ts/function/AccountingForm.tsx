import * as React from "react";
import * as T from "../AccountingTypes" 

const cardStyle = {
  border: "1px solid #DDD",
  padding: "1rem",
  borderRadius: "5px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
  width: "30rem",
  margin: "2rem auto",
  maxWidth: "80%"
};

const textBoxStyle = {
  font: "inherit",
  padding: "0.1rem 0.25rem",
  border: "none",
  borderBottom: "2px solid #ccc",
  marginBottom: "1rem",
  display: "block",
  width: "100%"
};

const redButtonStyle = {
  font: "inherit",
  background: "#ff2058",
  padding: "0.5rem 2rem",
  color: "white",
  border: "1px solid #ff2058",
  margin: "0.5rem 0",
  borderRadius: "5px",
  cursor: "pointer"
};

const AccountingForm = (props: T.IAccountingFormProps): JSX.Element => {
  const [enteredTitle, setEnteredTitle] = React.useState("");
  const [enteredAmount, setEnteredAmount] = React.useState("");

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    props.onAddAccounting({ title: enteredTitle, amount: enteredAmount });
  };

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredTitle(event.currentTarget.value);
  };

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredAmount(event.currentTarget.value);
  };

  return (
    <div style={cardStyle}>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Name</label>
        <input
          type="text"
          id="title"
          style={textBoxStyle}
          onChange={titleChangeHandler}
          value={enteredTitle}
        />
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          style={textBoxStyle}
          onChange={amountChangeHandler}
          value={enteredAmount}
        />
        <button type="submit" style={redButtonStyle}>
          Add Account
        </button>
      </form>
    </div>
  );
};

export default AccountingForm;
