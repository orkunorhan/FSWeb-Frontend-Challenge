import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import data from '../data.json';

export default function Skills() {
    const { lang } = useContext(LanguageContext);
    const skillsData = data[lang].skills;

    return (
        <section id="skills" className="py-20 px-6 md:px-32 max-w-360 mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#1F2937] dark:text-[#AEBCCF]">
                {skillsData.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
                {skillsData.list.map((skill) => (
                    <div key={skill.id} className="flex flex-col gap-4">
                        <h3 className="text-2xl font-medium text-brand uppercase tracking-wider">
                            {skill.title}
                        </h3>
                        <p className="text-sm text-[#6B7280] dark:text-white leading-relaxed">
                            {skill.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-20 border-t border-[#F4F4F4] dark:border-dark-bg"></div>
        </section>
    );
}