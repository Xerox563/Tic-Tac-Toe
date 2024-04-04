import React,{useState,useEffect} from 'react'
import "./index.css";

const DarkMode = () => {
    const [title,setTitle] = useState("Light Mode");
    const [theme,setTheme] = useState("light-theme");

    const toggleTheme = () => {
      if(theme === "dark-theme") {
        setTitle('Light Mode');
        setTheme('light-theme');
      } else {
        setTitle('Dark Mode');
        setTheme('dark-theme');
      }
    }
    useEffect(() => {
        document.body.className = theme;
    },[theme])

  return (
    
    <a href="#" className="button" onClick={() => toggleTheme() }>{title}</a>
  )
}

export default DarkMode;