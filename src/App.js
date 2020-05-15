import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import style from "styled-theming";
import { useTheme } from "./useTheme";

const getBackground = style("mode", {
  light: "#EEE",
  dark: "#111",
});

const getFackground = style("mode", {
  light: "#111",
  dark: "#EEE",
});

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${getBackground};
    color: ${getFackground};
  }
`;

const Title = styled.h1`
  text-align: center;
  letter-spacing: 2px;
`;

const Button = styled.button`
  margin: auto;
  display: block;
  padding: 12px 30px;
  border: none;
  font-size: 15px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Title>DARKMODE</Title>
      <Button
        onClick={() =>
          theme.setTheme(
            theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
          )
        }
      >
        Toggle Mode
      </Button>
    </ThemeProvider>
  );
};

export default App;
