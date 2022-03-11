import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: {
      white: string;
      gray: string;
      blue: string;
      black: string;
      text: {
        title: {
          color: string;
          size: string;
        }
      }
      line: {
        color: string;
        height: string;
      }
    }
  }
}