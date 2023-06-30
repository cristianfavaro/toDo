import styled from 'styled-components';

export const ListComponent = styled.div`
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
    };
`;