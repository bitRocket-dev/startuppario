/** @format */
import "@emotion/react";

declare module "*.md";
declare module "react-csv";

declare module "@emotion/react" {
  export interface Theme {
    background: string;
    navbar: {
      background: string;
      borderBottom: string;
    };
    text: string;
    home: {
      textHover: string;
    };
    field: {
      background: string;
      placeholder: string;
      color: string;
      label: string;
      disabled: string;
      inactive: string;
      boxShadow: string;
    };
    button: {
      background: string;
      color: string;
    };
    buttonHome: {
      background: string;
      backgroundHover: {
        boxShadow: string;
      };
    };
  }
}
