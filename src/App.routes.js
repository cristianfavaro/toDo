import React from 'react';
// import { Main } from "./Components/List";
import { Routes, Route, Outlet, Link, MemoryRouter, Navigate, useParams } from "react-router-dom";

import styled from 'styled-components';
import { Sidebar } from './Components/Sidebar';


export const Grid = styled.div`
    display: grid;
    /* grid-template-columns: auto ${props=> props.sidebar ? "350px" : "0"}; */
    grid-template-columns: 350px auto;
    grid-template-rows: 50px auto;
    grid-template-areas:  
    'MH MH'
    'SB CT';
    height: auto;
    
`


function Layout() {
    return (
      <Grid>
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
        <Sidebar/>
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
      </Grid>
    );
  }
  
const Container = styled.main`
    grid-area: CT;
`

  
function NoMatch(){
    return <div>Crie ou escolha uma lista de atividades</div>
};

function ToDo() {
    let { id } = useParams();
    return (
        <Container>
        <h2>Nothing to see here!</h2>
        <h3>ID: {id}</h3>
        <p>
            <Link to="/">Go to the home page</Link>
        </p>
        </Container>
    );
}

const AppRoutes = () => {
    return <Routes>
        <Route path="/" element={<Layout />}>
            
            <Route path="/NoMatch" element={<NoMatch />} /> 
            <Route path="/:id" element={<ToDo />} />                 
            <Route path="*" element={<Navigate to="/NoMatch"/>}/>      
        </Route>
    </Routes>
}   

{/* <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} /> */}
// const AppRoutes = () => {
    
//     return <MemoryRouter basename="/">
//         <Link to="/app">Oi oi</Link>
//         <Sidebar />  
//         <Routes> 
//             <Route path={"/"} component={()=><div>oioi</div>}/>   
//         </Routes>       
//     </MemoryRouter>
// }

export default AppRoutes; 



// function Home() {
//     return (
//       <Container>
//         <h2>Home</h2>
//       </Container>
//     );
//   }
  
//   function About() {
//     return (
//       <Container>
//         <h2>About</h2>
//       </Container>
//     );
//   }
  
//   function Dashboard() {
//     return (
//       <Container>
//         <h2>Dashboard</h2>
//       </Container>
//     );
//   }