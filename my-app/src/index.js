import React from 'react';
import ReactDOM from 'react-dom/client';

import BurgerApp from "./routes/BurgerApp";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BurgerApp/>
);

reportWebVitals();
