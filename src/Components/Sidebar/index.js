import React from 'react';
import { usePersistedReducer } from '../../hooks/usePersisted';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.div`
  grid-area: SB;
`


const remindersReducer = (state, action) => {
    
  switch (action.type){

      case 'ADD_ITEM':
          const id = state.length + 1;
          return [...state, {name: `Nova lista ${id}`, id: id, color: "96, 113, 201", items: []}]
          
      default:
          return;
  }
};

export const Sidebar = () => {
  const [reminders, dispatchReminders] = usePersistedReducer("reminders", remindersReducer, [
    {name: "Nova lista 1", id: 1, color: "96, 113, 201", items: []}
  ]);
  return <Container>
      <div onClick={()=>dispatchReminders({"type": "ADD_ITEM"})}>
          Adicionar!!!! +
      </div>
      <ul>
        {
          reminders.map(
            reminder => <li key={reminder.id}><Link to={`/${reminder.id}`}>{reminder.name}</Link></li>
          )
        }
      </ul>
    

  </Container>
};
