import React, {useState} from 'react';
import {Item} from '../Item';
import styled from 'styled-components';
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";

const ListComponent = styled.div`
    box-shadow:  0px -1px 0 0 #D3D3D3;
    margin-left: 2rem;
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


export const List = ({color, header}) => {
  let data = ["Testando 1", "Testando 2", "Testando 3", "Testando 4", "Testando5", "Testando 6", "Testando", "Testando", "Testando"];

  const [collapsed, setCollapsed] = useState(false);

  return <ListComponent>
    
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
            data.map((item) => <Item color={color}>{item}</Item>)
            }
    </ul>
    }        
    </ListComponent>
};




