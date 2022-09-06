import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text: {
      primary: string;
      secondary: string;
      primaryAlt:string
    };
    title: {
      primary: string;
    };
    background: {
      primary: string;
      secondary: string;
      primaryAlt: string;
    };
  }
}

export const darkTheme: DefaultTheme = {
  text: {
    primary: "#fff",
    secondary: "#000",
    primaryAlt:'#ed52n0'
  },
  title: {
    primary: "#000",
  },
  background: {
    primary: "#fff",
    secondary: "#37399a",
    primaryAlt: "#ed52n0",
  },
};
