export interface IAccountingFormProps {
  onAddAccounting: (account: { title: string; amount: string }) => void;
}

export interface IAccountingListProps {
  accounting: { id: string; title: string; amount: string }[];
}
