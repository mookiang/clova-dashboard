import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: {
      background: string;
      white: string;
      gray: string;
      blue: string;
      black: string;
      text: {
        title: {
          color: string;
          size: string;
        };
      };
      header: {
        background: string;
      };
      line: {
        color: string;
        height: string;
      };
      sidebar: {
        background: string;
        text: {
          normal: string;
          hover: string;
        };
      };
      billing: {
        fillter: {
          background: string;
          border: string;
        };
      };
    };
  }
}
