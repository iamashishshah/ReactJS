/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider = ThemeContext.Provider;
