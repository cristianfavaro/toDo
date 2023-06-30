import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { useReminders, useDispatchReminders } from '../../context/RemindersContext';
import Editable from '../Editable';

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
  color: #fff;
`;


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
        
        to={`/${reminder.id}`} 
      >
        <Editable onInput={onInput}>
          {nameState[0]}
        </Editable>
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

