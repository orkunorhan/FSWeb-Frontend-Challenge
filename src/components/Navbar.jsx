import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import data from '../data.json';
import { useHireMe } from '../hooks/useHireMe';

export default function Navbar() {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
    const { lang, toggleLang } = useContext(LanguageContext);
    const { handleHireMe } = useHireMe();

    const t = data[lang].navbar;

    return (
        <nav className="flex flex-col gap-8 pt-10 pb-6 px-6 md:px-32 max-w-360 mx-auto">
            <div className="flex justify-end items-center gap-4 text-xs font-bold tracking-widest">

                <div
                    className="flex items-center gap-3 cursor-pointer select-none group"
                    onClick={toggleDarkMode}
                >
                    <div className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${isDarkMode ? 'bg-[#3A3A3A]' : 'bg-brand'}`}>

                        <div className={`w-4 h-4 rounded-full absolute top-1 transition-all duration-300
            ${isDarkMode ? 'left-1 bg-[#FFE86E]' : 'left-7 bg-[#FFE86E]'}`}>

                            {isDarkMode && (
                                <div className="w-4 h-4 bg-[#3A3A3A] rounded-full absolute left-1.5"></div>
                            )}
                        </div>
                    </div>

                    <span className="text-[#777777] dark:text-[#D9D9D9] uppercase transition-colors group-hover:text-brand">
                        {isDarkMode ? t.light : t.dark}
                    </span>
                </div>

                <span className="text-[#777777]">|</span>

                <button
                    onClick={toggleLang}
                    className="text-brand dark:text-[#B7AAFF] hover:opacity-80 transition-opacity uppercase"
                >
                    {t.lang}
                </button>
            </div>

            <div className="flex justify-between items-center">
                <div className="w-12 h-12 bg-[#EEEBFF] dark:bg-[#4731D3] rounded-full flex items-center justify-center text-brand dark:text-[#8F88FF] font-bold text-2xl -rotate-12 transition-all">
                    O
                </div>

                <div className="flex items-center gap-8 md:gap-20 text-[#6B7280] dark:text-[#777777] font-medium text-lg">
                    <a href="#skills" className="hover:text-brand transition-colors">{t.skills}</a>
                    <a href="#projects" className="hover:text-brand transition-colors">{t.projects}</a>
                    <button
                        onClick={handleHireMe}
                        className="px-8 py-3 bg-white text-brand border border-brand rounded-md font-bold hover:bg-brand hover:text-white dark:bg-dark-bg dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                    >
                        {t.hire}
                    </button>
                </div>
            </div>
        </nav>
    );
}