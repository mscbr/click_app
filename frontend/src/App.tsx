import React from "react";

import Header from "./components/shared/navigation/Header";

import { createGlobalStyle } from "styled-components";
import { primary } from "./components/shared/Styles";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background: ${primary};
  }
`;

const App: React.FC = () => {
  return (
    <>
      <Header />
      <GlobalStyle />
    </>
  );
};

export default App;
