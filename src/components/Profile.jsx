import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import data from '../data.json';

export default function Profile() {
    const { lang } = useContext(LanguageContext);
    const t = data[lang].profile;

    return (
        <section className="py-20 px-6 md:px-32 max-w-360 mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-[#1F2937] dark:text-[#AEBCCF]">
                {t.title}
            </h2>

            <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1 flex flex-col gap-8">
                    <h3 className="text-2xl font-medium text-brand">
                        {t.leftTitle}
                    </h3>

                    <div className="flex flex-col gap-4">
                        {t.info.map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <span className="w-1/3 font-bold text-[#1F2937] dark:text-white">
                                    {item.label}
                                </span>
                                <span className="w-2/3 text-[#1F2937] dark:text-white">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-8">
                    <h3 className="text-2xl font-medium text-brand">
                        {t.aboutTitle}
                    </h3>
                    <p className="text-lg text-[#6B7280] dark:text-white leading-relaxed">
                        {t.about}
                    </p>
                </div>
            </div>

            <div className="mt-20 border-t border-[#F4F4F4] dark:border-dark-bg"></div>
        </section>
    );
}