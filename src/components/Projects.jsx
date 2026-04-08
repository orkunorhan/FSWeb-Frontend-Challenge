import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import data from '../data.json';

export default function Projects() {
    const { lang } = useContext(LanguageContext);
    const projectData = data[lang].projects;

    return (
        <section id="projects" className="py-5 px-6 md:px-32 max-w-360 mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#1F2937] dark:text-[#AEBCCF]">
                {projectData.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projectData.list.map((project) => (
                    <div key={project.id} className="flex flex-col gap-6">
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <h3 className="text-3xl font-bold text-brand">
                            {project.title}
                        </h3>

                        <p className="text-sm text-[#6B7280] dark:text-white leading-relaxed min-h-24">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-1 border border-brand text-brand rounded-full text-xs font-bold dark:bg-[#383838] dark:border-[#383838] dark:text-[#8F88FF]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center mt-2 font-medium">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#1F2937] dark:text-[#E1E1FF] underline hover:text-brand transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#1F2937] dark:text-[#E1E1FF] underline hover:text-brand transition-colors"
                            >
                                {lang === 'tr' ? 'Siteye Git' : 'View Site'} →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}