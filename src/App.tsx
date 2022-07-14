import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Navigation} from './components/Navigation';
import {MainPage} from './pages/MainPage';
import {AuthPage} from './pages/AuthPage';
import {AirportDetailPage} from './pages/AirportDetailPage'

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/auth'} element={<AuthPage />} />
        <Route path={'/airport/:id'} element={<AirportDetailPage />} />

      </Routes>

    </>
  );
}

export default App;
