import React from 'react';
import { useParams } from "react-router-dom";
import { List } from '../List';
import { NewItem } from '../Item';
import { useReminders, useDispatchReminders } from '../../context/RemindersContext';
import { Container, Title } from './styles';

function getToDo(id, reminders){
    for (let i = 0; i < reminders.length; i++) {
        if(reminders[i].id == id){
            return reminders[i];
        };
    };
};

export default function ToDo(){
    let { id } = useParams();
    const reminders = useReminders();
    const toDo = getToDo(id, reminders);
    
    return <Container>
        <div className="content">
            <Title color={toDo.color}><span>{toDo.name}</span></Title>
            <div>
                <List list_id={id} items={toDo.items.filter(item => item.checked)} header="concluídos" color={toDo.color}/>
                <List list_id={id} items={toDo.items.filter(item => !item.checked)} color={toDo.color}>
                    <NewItem id={id}/>
                </List>
                
            </div>
        </div>
        
    </Container>
}