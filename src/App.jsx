import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/header'
import { MainContext } from './context/MainContext'

const App = () => {
  const Themes = {
    light: 'light',
    dark: 'dark'
  }

  const [theme, setTheme] = useState(Themes.light);
  const linkHtml = `<link id="dark-css" rel="stylesheet" href="themes/dark.css">`;

  useEffect(() => {
    const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkTheme) {
      setTheme(Themes.dark);
    }
  }, []);

  useEffect(() => {
    if (theme === Themes.dark) {
      document.head.insertAdjacentHTML('beforeend', linkHtml);
    } else if (theme === Themes.light) {
      const darkCss = document.head.querySelector('#dark-css');
      if (darkCss) {
        darkCss.remove();
      }
    }
  }, [theme]);

  return (
    <MainContext.Provider value={{
      Themes, theme, setTheme
    }}>
      <div className="App">
        <Header />
      </div>
    </MainContext.Provider>
  )
}

export default App;