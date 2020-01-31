import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Header from './components/shared/navigation/Header';
import Footer from './components/shared/navigation/Footer';
import EnterTeam from './components/clicks/pages/EnterTeam';
import ClickTeam from './components/clicks/pages/ClickTeam';

import { createGlobalStyle } from 'styled-components';
import { primary } from './components/shared/Styles';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background: ${primary};
  }
`;

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <EnterTeam />
                    </Route>
                    <Route path="/:teamName" component={ClickTeam} exact />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </Router>
        </>
    );
};

export default App;
