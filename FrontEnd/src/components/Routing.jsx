import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Adduser from './Adduser';
import Home from './Home';
import Edit from './Edit';
import Delete from './Delete';
import Login from './Login';
import Dashboard from './Dashboard';
import Subuser from './Subuser';
import Demo from './Demo';

const Routing = () => {
    return(
        <>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/home" element={<Home/>}></Route>
            <Route exact path="/adduser" element={<Adduser/>}></Route>
            <Route exact path="/edit/:userID" element={<Edit/>}></Route>
            <Route exact path="/delete/:userID" element={<Delete/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/demo" element={<Demo/>}></Route>
            <Route exact path="/subuser/:userID" element={<Subuser/>}></Route>
            <Route exact path="/dashboard/:userID" element={<Dashboard/>}></Route>
        </Routes>

        </>
    );
}

export default Routing;