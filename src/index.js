import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import UseStore from "./store/UseStore";
import PlayersStore from "./store/PlayersStore";
import {BrowserRouter} from "react-router-dom";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UseStore(),
        player: new PlayersStore()
    }}>
        <App />
    </Context.Provider>
);

reportWebVitals();
