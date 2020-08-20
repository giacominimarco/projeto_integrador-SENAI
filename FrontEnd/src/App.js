import React from 'react';
import './global.css';
import Routes from "./routes";
import history from './history';
import { Router } from 'react-router-dom';


const App = () => 
    <Router history={history}>
        <Routes/>
    </Router>;
export default App;
