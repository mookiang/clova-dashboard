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
  "FACESIGN" = "CLOVA FaceSign",
  "EKYC" = "CLOVA eKYC",
  "NSML" = "CLOVA NSML",
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

export enum Platforms {
  "PUB" = "민간",
  "FIN" = "금융",
  "GOV" = "공공"
}

export const platformState = atom<Platforms>({
  key: "platform",
  default: Platforms.PUB,
});

export const platformSelector = atom<IBillingFilter[]>({
  key: "selector",
  default: [],
});
