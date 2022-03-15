import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import design from "./design-tokens.tokens_test.json";

const mappedTheme = {
  palette: {
    text: Object.entries(design.color.light.text).reduce(
      (acc, cur) => ({ ...acc, [cur[0]]: cur[1].value }),
      {}
    ),
    primary: Object.entries(design.color.light.primary).reduce(
      (acc, cur) => ({ ...acc, [cur[0]]: cur[1].value }),
      {}
    )
  }
};

export const theme = createTheme(mappedTheme);

export const ThemeProvider = props => <MuiThemeProvider theme={theme} {...props} />

export default theme