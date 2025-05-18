import { useContext } from "react";
import { createContext, useState } from "react";
import type { ReactNode } from "react";
type SidebarContextType = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};


export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) throw new Error("useSidebar must be used within SidebarProvider");
    return context;
};

