import React,{useState} from 'react';
import { ThemeContext } from '../context/Theme';
import dark from '../constants/theme/dark';
import light from '../constants/theme/light';

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(light);

    const handleToogleTheme=()=>{
        if(theme.type==="light")
        {
            setTheme(dark);
        }else{
            setTheme(light);
        }
    };
    return (
        <ThemeContext.Provider 
        value={{
            theme,
            setTheme,
            toggleTheme:handleToogleTheme,
        }}>
        {children}
        </ThemeContext.Provider>
    );
};
export default ThemeProvider;
