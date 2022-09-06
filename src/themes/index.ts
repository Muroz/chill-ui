import { ChillUITheme } from "../types/themes";

const defaultTheme: ChillUITheme = {
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
