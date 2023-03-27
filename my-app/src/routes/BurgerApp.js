import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from "../Pages/MainPage";
import BadGateWay from "../Pages/BadGateWay";

import './styles.scss'

function BurgerApp() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='*' element={<BadGateWay/>}/>
        </Routes>
    </Router>
  );
}

export default BurgerApp;


