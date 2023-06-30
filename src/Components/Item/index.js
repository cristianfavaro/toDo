import React, {useState} from "react";
import { BsCircle, BsCircleFill } from "react-icons/bs";
import { useDispatchReminders } from "../../context/RemindersContext";
import Editable from "../Editable";
import { ItemStyled } from "./styles";


export const Item = ({color, item, list_id}) => {
  // Componente responsável por criar cada item.

  const dispatchReminders = useDispatchReminders();
  const nameState = useState(item.name);

  const onClick = () => {
    dispatchReminders({type: "UPDATE_REMINDER", id: item.id, list_id: list_id, update: {checked: !item.checked}})
  };

  const onInput = (textContent) =>{
    dispatchReminders({
      type: "UPDATE_REMINDER",
      id: item.id, list_id: list_id,
      update: {name: textContent},
    });
  };

  const Marker = {
    false: BsCircle,
    true: BsCircleFill, 
  }[item.checked];

  return (
    <ItemStyled color={color}>
      <div className="reminder" tabIndex="1">
        <div  className="check" onClick={onClick}>
          <a>
            <Marker color={`rgb(${color})`} size={30}/>
          </a>
        </div>
        <Editable onInput={onInput} className="reminder-text">
          {nameState[0]}
        </Editable>
      </div>
    </ItemStyled>
  );
};

export const NewItem = ({id}) => {
  const dispatchReminders = useDispatchReminders();
  
  const onClick = () => {
    dispatchReminders({type: "ADD_REMINDER", id: id, reminder: ""})
  }
  return (
    <ItemStyled onClick={onClick}>
        <div className="reminder">
          <div className="reminder-text">
            Novo Item
          </div>
        </div>
    </ItemStyled>
  );
};