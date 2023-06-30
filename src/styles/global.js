import { createGlobalStyle } from 'styled-components';

//Aqui a gente define os padrões globais de css que vão ser usados em todos os componentes
const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    };
    body{
        font-family: 'Open Sans', sans-serif; 
    };
`
export default GlobalStyle;