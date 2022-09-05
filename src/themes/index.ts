import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  colors: {
    primary: "#3DA9FC",
    secondary: "#90B4CE",
    contrastText: "white",
    error: "red",
    warning: "orange",
    info: "blue",
    success: "#2CB67D",
    grey50: "#fafafa",
    background: '#FFFFFE',
    headline: '#094067',
    paragraph: '#5F6C7B',
    tertiary: '#EF4565',
    buttonText: '#FFFFFE'
  },
  typography: {
    fontFamily: "helvetica",
    h1: {
      fontFamily: "sans-serif",
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: "4rem",
    },
    h2: {
      fontFamily: "sans-serif",
      fontWeight: 700,
      fontSize: "2rem",
    },
    body: {
      fontFamily: "sans-serif",
      fontWeight: 400,
      fontSize: "1.25rem",
    },
    subtitle: {
      fontFamily: "sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
    },
    button: {
      fontFamily: "sans-serif",
      fontWeight: 700,
      fontSize: "1rem",
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
    "spacing-13": "10rem",
    "3xs": "0.25rem",
    "2xs": '0.5rem',
    'xs': '0.75rem',
    's': '1rem',
    'm': '1.5rem',
    'l': '2rem',
    'xl': '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },
  shape: {
    borderRadius: 4
  }
};

export { defaultTheme };
