import { MemoryRouter } from "react-router-dom";
import AppRoutes from "./App.routes";
import GlobalStyle from './styles/global';


export default function App() {
  return <MemoryRouter>
    <GlobalStyle/>
    <AppRoutes/>
  </MemoryRouter>
}
