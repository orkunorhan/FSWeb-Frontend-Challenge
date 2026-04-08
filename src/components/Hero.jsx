import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import data from '../data.json';
import { useHireMe } from '../hooks/useHireMe';

export default function Hero() {
    const { lang } = useContext(LanguageContext);
    const { handleHireMe } = useHireMe();
    const t = data[lang].hero;

    return (
        <section className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-32 max-w-360 mx-auto gap-12">
            <div className="flex-1 flex flex-col gap-10">

                <div className="flex items-center gap-4">
                    <div className="w-24 h-0.5 bg-brand"></div>
                    <span className="text-brand font-medium text-xl tracking-wide">
                        {t.name}
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-[#1F2937] dark:text-[#AEBCCF]">
                    {t.title}
                </h1>

                <p className="text-[#6B7280] dark:text-white text-xl max-w-lg leading-relaxed">
                    {t.description}
                </p>

                <div className="flex flex-wrap gap-3">

                    <button onClick={handleHireMe} className="px-10 py-3 bg-brand text-white rounded-md font-bold hover:opacity-90 transition-all">
                        {t.buttons.hire}
                    </button>

                    <a
                        href="https://github.com/orkunorhan"
                        target='_blank'
                        className="flex items-center gap-3 px-6 py-3 border border-brand text-brand rounded-md font-bold hover:bg-brand hover:text-white transition-all dark:bg-[#383838] dark:border-[#383838] dark:text-[#E1E1FF]"
                    >
                        <FontAwesomeIcon icon={faGithub} className="text-xl" />
                        {t.buttons.github}
                    </a>

                    <a
                        href="https://www.linkedin.com/in/orkunorhan/"
                        target='_blank'
                        className="flex items-center gap-3 px-6 py-3 border border-brand text-brand rounded-md font-bold hover:bg-brand hover:text-white transition-all dark:bg-[#383838] dark:border-[#383838] dark:text-[#E1E1FF]"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
                        {t.buttons.linkedin}
                    </a>
                </div>
            </div>

            <div className="shrink-0">
                <img
                    src="/20220624_193840.webp"
                    alt="Profile"
                    className="w-[350px] h-[350px] md:w-[450px] md:h-[350px] object-cover rounded-2xl shadow-2xl"
                />
            </div>
        </section>
    );
}