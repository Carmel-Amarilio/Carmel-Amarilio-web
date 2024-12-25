import { allSkillsIcons } from "../assets/img/indexIcons";

export function Skills() {
    return (
        <section className="skills main-container full">
            <section className="flex column">
                <h1 className="head-page">Skills</h1>
                <h3 className="sub-header-page">Here you will find a list of the skills and technologies I am familiar with, each with its own use cases and examples of projects where I`ve applied them:</h3>

                <article className="skills-list card-grid">

                    {allSkillsIcons.map(skill =>
                        <a key={skill.name} title={skill.name} href={`https://www.google.com/search?q=${skill.name}`} target="_blank" rel="noopener noreferrer">
                            <img src={skill.icon} alt={skill.name} />
                        </a>
                    )}
                </article>
            </section>
        </section>
    )
}