import { atom, selector } from "recoil";

export enum Categories {
  "HOME" = "Home",
  "BILLING" = "Billing"
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.HOME,
});