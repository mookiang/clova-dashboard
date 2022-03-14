export interface IButton {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IBillingFilter {
  item: string;
  items: Array<string>;
  onChange: (event: React.FormEvent<HTMLSelectElement>) => void;
}