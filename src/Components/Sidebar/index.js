import React, {useState} from 'react';
import { usePersistedReducer } from '../../hooks/usePersisted';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { useReminders, useDispatchReminders } from '../../context/RemindersContext';

const Container = styled.div`
  grid-area: SB;
  background-color: rgb(56	56	54	);

  li{
    padding: 0.5rem 1rem;
  }
  a{
    color: #fff;
    text-decoration: none;
    font-weight: 200;
  }
`;

const NewListContainer = styled.div`
  background-color: rgb(56	56	54	);
  grid-area: HL;
  display: flex;
  align-items: center;
  justify-content: end;
  svg{
    color: #fff;
  }
`;


const remindersReducer = (state, action) => {
  
  switch (action.type){

      case 'ADD_ITEM':
          const id = state.length + 1;
          return [...state, {name: `Nova lista ${id}`, id: id, color: "96, 113, 201", items: []}]
          

      case 'UPDATE_ITEM':

        return state.map(item => item.id === action.id ?
              {...item, ...action.update}
            : 
              item 
          )

      default:
          return;
  }
};


const ListItem = ({reminder, dispatchReminders}) => {

  const nameState = useState(reminder.name);

  const onInput = (textContent) =>{
    dispatchReminders({
      type: "UPDATE_ITEM", 
      id: reminder.id, 
      update: {name: textContent},
    });
  };

  return <li>
    <Link 
      contentEditable="true"
      onInput={(e) => onInput(e.currentTarget.textContent)}
      to={`/${reminder.id}`} suppressContentEditableWarning={true}
    >
      {nameState[0]}
    </Link>
  </li>
}

export const Sidebar = () => {

  const reminders = useReminders();
  const dispatchReminders = useDispatchReminders();

  const NewList = () => {

    return <NewListContainer>
        <BsPlus onClick={()=>dispatchReminders({"type": "ADD_ITEM"})} size={40}/>
    </NewListContainer>  
  }

  return <React.Fragment>
      <NewList/>
      <Container>
          <ul>
            {
              reminders.map(
                reminder => <ListItem key={reminder.id} dispatchReminders={dispatchReminders} reminder={reminder}/>
              )
            }
          </ul>
      </Container>

  </React.Fragment>
  

};

