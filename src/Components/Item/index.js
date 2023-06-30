import styled, {css} from "styled-components";
import { BsCircle } from "react-icons/bs";
import { useDispatchReminders } from "../../context/RemindersContext";

const ItemStyled = styled.li`   
    position: relative; 
    cursor: pointer;
    list-style-type: none;
    >div{
      display: flex;
      height: 3rem;
      align-items: stretch;
      position: relative;
      >div{
          display: flex;
          align-items: center;
      };
    };  
    a{
        cursor: pointer;
        position: absolute;
    };

    .reminder{
      margin-left: -2rem;
      padding-left: 2rem;
    }

    .reminder-text{  
        box-shadow: 0 1px 0 0 #D3D3D3;
        width: 100%;
        margin-left: 3rem;
    };
   
    >div:active, >div:focus { 
      ${({color}) => color && css`
        background-color: rgba(${(props) => props.color}, 0.3);
        border: 1px solid rgb(${(props) => props.color});
        border-style: solid none;
        .reminder-text{  
          box-shadow: none;
        }; 
      `}
    };
`;



export const Item = ({color, item, list_id}) => {
  const dispatchReminders = useDispatchReminders();
  const onClick = () => {
    dispatchReminders({type: "UPDATE_REMINDER", id: item.id, list_id: list_id, update: {checked: !item.checked}})
  }
  return (
    <ItemStyled color={color}>
      <div className="reminder" tabIndex="1">
        <div  className="check" onClick={onClick}>
          <a>
            <BsCircle color={`rgb(${color})`} size={30}/>
          </a>
        </div>
        <div className="reminder-text">
              {item.name}
        </div>
      </div>
    </ItemStyled>
  );
};

export const NewItem = ({id}) => {
  const dispatchReminders = useDispatchReminders();
  
  const onClick = () => {
    console.log('apertei')
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