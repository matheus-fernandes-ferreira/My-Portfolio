import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#009097', 
            dark: '#232323'
        },
        secondary: {
            main: '#ffae00',
        },

    },
    typography: {
        fontFamily: "Open Sans, sans-serif",
        h1: {
            fontSize: "3.7rem", // Define o tamanho da fonte para h1
            fontWeight: 600, // Define a espessura
          },
          h3:{
            fontSize: "2rem", // Define o tamanho da fonte para h1
            fontWeight: 100, // Define a espessura
          }
    },
    
  });

  theme = responsiveFontSizes(theme)
export default theme