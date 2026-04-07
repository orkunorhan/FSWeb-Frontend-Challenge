import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useLocalStorage('lang', 'en');

    const toggleLang = () => {
        const nextLang = lang === 'en' ? 'tr' : 'en';
        setLang(nextLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;