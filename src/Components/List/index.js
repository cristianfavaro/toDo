import React, {useState} from 'react';
import {Item} from '../Item';
import styled from 'styled-components';
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";

const ListComponent = styled.div`
    margin-left: 2rem;
    position: relative;

    .row-divider{
        position: absolute;
        left: 0px;
        right: 0px;
        height: 1px;
        background-color: lightgrey;
        background-position: 0px 0px;
        background-repeat: repeat;
        top: 0px;
    }

    .header{
        div{
            box-shadow:  0px 1px 0 0 #D3D3D3;
            padding: 1rem 0;
            font-weight: 300;
            display: flex;
            align-items: center;
            color: lightgray;
            font-size: x-large;
        }
    }
`


export const List = ({color, header, children, list_id, items}) => {

  const [collapsed, setCollapsed] = useState(false);

React.useEffect(()=>{
    console.log(items, ' vendo aqui dentro')
}, [items])

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
                    4 {header}
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






