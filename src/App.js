import { MemoryRouter } from "react-router-dom";
import AppRoutes from "./App.routes";
import GlobalStyle from './styles/global';
import { RemindersProvider } from "./context/RemindersContext";

export default function App() {
  return <RemindersProvider>
    <MemoryRouter>
      <GlobalStyle/>
      <AppRoutes/>
    </MemoryRouter>
  </RemindersProvider>
}
