import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  primary: {
    background: "#f1f1f1",
    white: "#fafafa",
    gray: "#dadada;",
    blue: "#5352ed",
    black: "#b2bec3",
    text: {
      title: {
        color: "#4a4a4a",
        size: "28px",
      },
    },
    table: {
      th: {
        color: "#5352ed",
        background: ""
      },
      tr: {
        odd: "",
        even: "",
      },
      td: {
        color: "#4a4a4a",
        background: ""
      },
    },
    button: {
      background: "#5352ed",
      border: "#8794fd",
      color: "#fafafa",
      hover: {
        background: "#6677fa",
        border: "",
        color: "#fafafa",
      },
    },
    header: {
      background: "#fcfcfc",
    },
    line: {
      color: "#d9d9d9",
      height: "3px",
    },
    sidebar: {
      background: "#5352ed",
      text: {
        normal: "#eee",
        hover: "#b2bec3",
      },
    },
    billing: {
      fillter: {
        background: "#fcfcfc",
        border: "#d9d9d9",
      },
    },
  },
};
