import styled from 'styled-components';


export const Container = styled.main`
    grid-area: CT;
    overflow: hidden;
    .content{
        display: flex;
        flex-direction: column;
        height: -webkit-fill-available;
        >div{
            overflow: auto;
            flex: 1 0 0px;
        }
    };
`

export const Title = styled.h1`
    font-weight: 400;
    margin-left: 2rem;
    box-shadow: 0 1px 0 0 #D3D3D3;
    padding: 1rem 0;
    color: rgb(${props => props.color});
`;
