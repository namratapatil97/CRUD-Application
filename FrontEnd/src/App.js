import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Routing from './components/Routing';


function App() {

  return (
    <>
    <BrowserRouter>
        <Routing/>
    </BrowserRouter>

    </>
  );
}

export default App;
