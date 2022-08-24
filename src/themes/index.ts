import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  colors: {
    primary: "cyan",
    secondary: "blue",
    contrastText: "white",
    error: "red",
    warning: "orange",
    info: "blue",
    success: "green",
    grey50: "#fafafa"
  },
  typography: {
    fontFamily: "helvetica",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: "normal",
    letterSpacing: "1px",
    lineHeight: "1.25rem",
    h1: {
      fontFamily: "helvetica",
      fontWeight: 300,
      fontSize: "3.375rem",
      lineHeight: "4rem",
      letterSpacing: "0em"
    },
    h2: {
      fontFamily: "helvetica",
      fontWeight: 300,
      fontSize: "2.625rem",
      lineHeight: "3.125rem",
      letterSpacing: "0em"
    },
    h3: {
      fontFamily: "helvetica",
      fontWeight: 300,
      fontSize: "2rem",
      lineHeight: "2.5rem",
      letterSpacing: "0em"
    },
    h4: {
      fontFamily: "helvetica",
      fontWeight: 400,
      fontSize: "1.75rem",
      lineHeight: "2.25rem",
      letterSpacing: "0em"
    }
  },
  space: {
    "spacing-01": "0.125rem",
    "spacing-02": "0.25rem",
    "spacing-03": "0.5rem",
    "spacing-04": "0.75rem",
    "spacing-05": "1rem",
    "spacing-06": "1.5rem",
    "spacing-07": "2rem",
    "spacing-08": "2.5rem",
    "spacing-09": "3rem",
    "spacing-10": "4rem",
    "spacing-11": "5rem",
    "spacing-12": "6rem",
    "spacing-13": "10rem"
  }
};

export { defaultTheme };
