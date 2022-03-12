import { atom, selector } from "recoil";
import { IBillingFilter } from "./interface";

export enum Categories {
  "HOME" = "Home",
  "BILLING" = "Billing",
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.HOME,
});

export enum Services {
  "ALL" = "전체",
  "CHATBOT" = "CLOVA Chatbot",
  "OCR" = "CLOVA OCR",
  "AICALL" = "CLOVA AiCall",
  "DUBBING" = "CLOVA Dubbing",
  "SPEECH" = "CLOVA Speech",
  "AITEMS" = "AiTEMS",
}

export const serviceState = atom<Services>({
  key: "service",
  default: Services.ALL,
});

export const serviceSelector = atom<IBillingFilter[]>({
  key: "selector",
  default: [],
});
