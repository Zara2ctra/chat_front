import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import User from "./chat/User";

const GlobalStyles = createGlobalStyle`
.card-header {
  padding: 0.25em 0.5em;
}
.card-body {
  padding: 0.25em 0.5em;
}
.card-text {
  margin: 0;
}
`

export const Context = createContext(null);

ReactDOM.render(
    <Context.Provider value={{
        user: new User()
    }}>
        <GlobalStyles />
        <App />
    </Context.Provider>,
    document.getElementById('root')
);