import React from 'react';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 20px;
    background: salmon;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <h1>ST F U</h1>
      </div>
    </>
  );
};

export default App;
