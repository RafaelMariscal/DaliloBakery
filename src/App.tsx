import { BrowserRouter } from "react-router-dom";
import SidebarContextProvider from "./Context/SidebarContextProvider";
import { Router } from './Router'
import './styles/global.scss'

export function App() {
  return (
    <BrowserRouter>
      <SidebarContextProvider>
        <Router />
      </SidebarContextProvider>
    </BrowserRouter>
  )
}