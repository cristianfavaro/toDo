import React, {useState} from 'react';
import {Item} from '../Item';
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";
import { ListComponent } from './styles';

export const List = ({color, header, children, list_id, items}) => {

  const [collapsed, setCollapsed] = useState(false);

  return <ListComponent>
    <div className='row-divider'/>
    
    {
        header && <div className='header'>
            <div>
                {
                    !collapsed ? 
                        <BsFillCaretDownFill onClick={()=>setCollapsed(!collapsed)}/>
                    : 
                        <BsFillCaretRightFill onClick={()=>setCollapsed(!collapsed)}/>
                }
                <span onClick={()=>setCollapsed(!collapsed)}>
                    {items.length} {header}
                </span>
            </div>
        </div>
    }
    {
        !collapsed && <ul>
                {
                    items && items.map( item => <Item key={item.id} item={item} list_id={list_id} color={color}>{item.name}</Item>)
                }
            {children}
        </ul>
    }
    </ListComponent>
};
