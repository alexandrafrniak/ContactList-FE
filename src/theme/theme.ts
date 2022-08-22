// from https://github.com/Sardor2/material-ui-styled-components-starter
import { createTheme } from "@mui/material/styles";

export interface CustomTheme {
  bg: {
    main: string;
  };
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#1500a3",
    },
    secondary: {
      main: "#afd7e3",
    },
  },
  bg: {
    main: "#15005b",
  },
});

export default theme;
