import { ReactNode, useState } from 'react'
import { sidebarContext } from './sidebarContext'

export default function SidebarContextProvider(props: { children: ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const valueToProvide = { isSidebarOpen, setSidebarOpen }
  return (
    <sidebarContext.Provider value={valueToProvide}>
      {props.children}
    </sidebarContext.Provider>
  )
}
