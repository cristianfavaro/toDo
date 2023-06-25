import React, { useEffect, useState } from "react";
import ToDoRoutes from "./App.routes";
import { usePersistedReducer } from "./hooks/usePersisted";
import styled from 'styled-components';

import {
  MemoryRouter,
  Routes,
  Link,
  Route,
} from "react-router-dom";

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

export const remindersReducer = (state, action) => {
    
  switch (action.type){

      case 'ADD_ITEM':
          const id = state.length + 1;
          return [...state, {name: `Nova lista ${id}`, id: id, color: "96, 113, 201", items: []}]
          
      default:
          return;
  }
};




const ToDo = () => {
  const color = "96, 113, 201";
  const [reminders, dispatchReminders] = usePersistedReducer("reminders", remindersReducer, []);

  return <Grid>      
      <ToDoRoutes/>
  </Grid>
};

export default ToDo;
