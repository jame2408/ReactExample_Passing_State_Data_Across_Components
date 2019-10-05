import React from 'react';
import * as T from "../AccountingTypes";

const listStyle = {
  width: '30rem',
  maxWidth: '80%',
  margin: 'auto'
};

const h2Style = {
  borderBottom: '3px solid #ccc',
  paddingBottom: '1rem'
};

const ulStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const liStyle = {
  margin: '1rem 0',
  padding: '0.5rem 1rem',
  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.26)',
  display: 'flex',
  justifyContent: 'space-between',
};

const AccountingList = (props: T.IAccountingListProps): JSX.Element => {
  return (
    <section style={listStyle}>
      <h2 style={h2Style}>Loaded Accounting</h2>
      <ul style={ulStyle}>
        {props.accounting.map(ig => (
          <li style={liStyle} key={ig.id}>
            <span>{ig.title}</span>
            <span>{ig.amount}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AccountingList;