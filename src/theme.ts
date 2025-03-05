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
        fontFamily: "Poppins",
        h1: {
            fontSize: "4rem", // Define o tamanho da fonte para h1
            fontWeight: 600, // Define a espessura
          },
          h3:{
            fontSize: "2.5rem", // Define o tamanho da fonte para h1
            fontWeight: 100, // Define a espessura
          }
    },
    
  });

  theme = responsiveFontSizes(theme)
export default theme