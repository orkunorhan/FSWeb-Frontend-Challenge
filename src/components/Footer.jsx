import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import data from '../data.json';

export default function Footer() {
    const { lang } = useContext(LanguageContext);
    const t = data[lang].footer;

    return (
        <footer className="bg-[#F9F9F9] dark:bg-[#141414] py-24">
            <div className="flex flex-col gap-12 px-6 md:px-32 max-w-360 mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] dark:text-[#AEBCCF] max-w-2xl leading-tight">
                    {t.title}
                </h2>

                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <a
                        href="mailto:almilasucode@gmail.com"
                        className="text-xl md:text-2xl font-medium text-[#AF0C48] dark:text-[#BAB2FF] hover:opacity-80 transition-opacity"
                    >
                        {t.email}
                    </a>

                    <div className="flex gap-8">
                        {t.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-lg font-bold text-[#1F2937] dark:text-[#E1E1FF] hover:text-[#AF0C48] transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}