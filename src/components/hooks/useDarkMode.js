import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {


    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    useEffect(() => {
        if(darkMode === true){
            document.querySelector('body').classList.add('dark-mode_toggle')
        }else {
            document.querySelector('body').classList.add('light-mode')
        }
    }, [darkMode])

    return [darkMode, setDarkMode]
}