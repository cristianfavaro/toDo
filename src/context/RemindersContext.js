import React from 'react';
import {usePersistedReducer} from '../hooks/usePersisted';
const RemindersContext = React.createContext();

const remindersReducer = (state, action) => {
  
    switch (action.type){
  
        case 'ADD_ITEM':
            const id = state.length + 1;
            return [...state, {name: `Nova lista ${id}`, id: id, color: "96, 113, 201", items: []}]
            
        case "ADD_REMINDER":
          return state.map(elem => elem.id == action.id ?
              {...elem, "items": elem.items.concat({name: "", checked: false, id: elem.items.length})}
            : 
              elem 
          )

        case "UPDATE_REMINDER":
          return state.map(elem => elem.id == action.list_id ? {
                ...elem, "items": elem.items.map(item => item.id == action.id ? 
                      {...item, ...action["update"]}
                  : 
                    item
                  )
                } : elem
          )

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
  

function RemindersProvider({children}){
    const [reminders, dispatchReminders] = usePersistedReducer("reminders", remindersReducer, [
        {name: "Nova lista 1", id: 1, color: "96, 113, 201", items: []}
    ]);
    
    
    return <RemindersContext.Provider value={{
                    reminders, dispatchReminders
                }}
            >
                {children}
            </RemindersContext.Provider> 
}

export function useReminders() {
    var {reminders} = React.useContext(RemindersContext);
    if(reminders === undefined){
      throw new Error("This hook must be used within a Provider");
    };
    return reminders;
};

export function useDispatchReminders() {
    var {dispatchReminders} = React.useContext(RemindersContext);
    if(dispatchReminders === undefined){
      throw new Error("This hook must be used within a Provider");
    };
    return dispatchReminders;
};

export {RemindersProvider}