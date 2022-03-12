export interface IBillingFilter {
  item: string;
  items: Array<string>;
  setFilter: (event: React.FormEvent<HTMLSelectElement>) => void;
}