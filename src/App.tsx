import { BrowserRouter } from "react-router-dom";
import SidebarContextProvider from "./Context/SidebarContextProvider";
import { Router } from './Router'

export function App() {
  return (
    <BrowserRouter>
      <SidebarContextProvider>
        <Router />
      </SidebarContextProvider>
    </BrowserRouter>
  )
}