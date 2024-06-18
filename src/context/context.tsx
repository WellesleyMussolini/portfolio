"use client"

import React from "react";

// Define the shape of the context value
interface IContextType {
    chatVisibility: boolean;
    setChatVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context
const ContextProvider = React.createContext<IContextType | undefined>(undefined);

interface IProviderProps { children: React.ReactNode };

// Create the provider component
export const ThemeProvider = ({ children }: IProviderProps) => {
    const [chatVisibility, setChatVisibility] = React.useState<boolean>(false);
    return (
        <ContextProvider.Provider value={{ chatVisibility, setChatVisibility }}>
            {children}
        </ContextProvider.Provider>
    );
};

// Custom hook to use the chat visibility context
export const useContext = (): IContextType => {
    const context = React.useContext(ContextProvider);
    if (!context) {
        throw new Error('useContext must be used within a ContextProvider');
    }
    return context;
};