import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import TopMenu from './components/TopMenu';

import Lietotnes from './pages/Lietotnes';
import WaterIntake from './pages/WaterIntake';

const routes = [
  { path: '/', label: 'Home' },
  { path: '/lietotnes', label: 'Lietotnes' },
  { path: '/udens', label: 'Ūdens' }
];


const App = () => {
  return (
    <Router>

        <TopMenu routesDict={routes}></TopMenu>


        <Routes>
          <Route path="/lietotnes" element={<Lietotnes />} />
          <Route path="/udens" element={<WaterIntake />} />
        </Routes>
    </Router>
  );
};

export default App;

