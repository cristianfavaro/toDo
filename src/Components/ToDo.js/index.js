import React from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { List } from '../List';
import { NewItem } from '../Item';

const Container = styled.main`
    grid-area: CT;
    flex: 1 1 0%;
    overflow: hidden;
    >content{
        flex: 1 1 0%;
        height: -webkit-fill-available;
        >div{
            overflow: auto;
            flex: 1 0 0px;
        }
    };
    
`

const Title = styled.h1`
    font-weight: 400;
    margin-left: 2rem;
    box-shadow: 0 1px 0 0 #D3D3D3;
    padding: 1rem 0;
`
/* color: rgb(${props => props.color}); */

export default function ToDo({color}){
    let { id } = useParams();
    return <Container>
        <Title color={color}><span>Lembretes {id}</span></Title>
        <div className="content">
            <div>
                <List header="concluídos" color={color}/>
                <List color={color}/>
                <NewItem/>
            </div>
        </div>
        
    </Container>
}