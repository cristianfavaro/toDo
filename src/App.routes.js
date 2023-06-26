import React from 'react';
// import { Main } from "./Components/List";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import ToDo from './Components/ToDo.js';
import styled from 'styled-components';
import { Sidebar } from './Components/Sidebar';


export const Grid = styled.div`
    display: grid;
    height: 100vh;
    /* grid-template-columns: auto ${props=> props.sidebar ? "350px" : "0"}; */
    grid-template-columns: 250px 1fr;
    grid-template-rows: 50px 1fr;
    grid-template-areas:  
    'MH MH'
    'SB CT';
    box-sizing: border-box;
`

function Layout() {
    return <Grid>
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
        <Sidebar/>
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
    </Grid>

  }
  
export default function AppRoutes(){
    return <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/:id" element={<ToDo />} />                 
            <Route path="/" element={<Navigate to="/1" replace={true}/>}/>      
        </Route>
    </Routes>
};   


