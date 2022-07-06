import { createContext } from "react";

export type SidebarContext = {
  isSidebarOpen: boolean
  setSidebarOpen: (s: boolean) => void
}
export const sidebarContext = createContext<SidebarContext | {}>({})