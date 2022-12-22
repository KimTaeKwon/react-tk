import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const MainContent = (props) => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return(
    <div style={{
      backgroundColor: theme === 'light'? 'white': 'black',
      color : theme === 'light'? 'white': 'black',
    }}>
      <p>useContext</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default MainContent;
