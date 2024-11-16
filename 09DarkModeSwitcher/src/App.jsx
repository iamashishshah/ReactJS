import { useEffect, useState } from "react";
import Card from "./components/Card";
import ToggleButton from "./components/ToggleButton.jsx";
import { ThemeProvider } from "./contexts/Theme.js";

function App() {

  const [themeMode, setThemeMode] = useState('light')

  const darkTheme = () =>{
    setThemeMode("dark")
  }

  const lightTheme = () =>{
    setThemeMode("light")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("dark", "light")
    
    document.querySelector('html').classList.add(themeMode)

  }, [themeMode])
  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        <div>
          <ToggleButton />
        </div>
        <div>
          <Card />
        </div>
    </ThemeProvider>
  );
}

export default App;
