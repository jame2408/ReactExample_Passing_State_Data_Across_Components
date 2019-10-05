import React, { useState } from 'react';

import AccountingForm from "../../src/components/accounting/ts/function/AccountingForm";
import AccountingList from "../../src/components/accounting/ts/function/AccountingList";

export default () => {
  const [userAccounting, setUserAccounting] = useState([]);

  const addAccountingHandler = (account: { title: string; amount: string; }) => {
    setUserAccounting(prevAccount => [...prevAccount, {id: Math.random().toString, ...account}]);
  }

  return (
    <>
      <AccountingForm onAddAccounting={addAccountingHandler} />
      <AccountingList accounting={userAccounting}></AccountingList>
    </>
  );
};
