import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#034043',
        },
        secondary: {
            main: '#ffae00',
        },
    },
    typography: {
        fontFamily: "Poppins",
        h1: {
            fontSize: "4rem", // Define o tamanho da fonte para h1
            fontWeight: 400, // Define a espessura
          },
    },
    
  });

  theme = responsiveFontSizes(theme)
export default theme