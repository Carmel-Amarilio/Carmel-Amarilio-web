import { githubIcon, gmailIcon, linkedinIcon, phoneIcon, youtubeIcon } from "../assets/img/indexIcons";

export function Home({ onChengRout }) {
    return (
        <section className="home">
            <nav className="social flex column gap10">
                <a href="https://github.com/Carmel-Amarilio" target="_blank" rel="noopener noreferrer" title="Github">  <button><img src={githubIcon} /></button></a>
                <a href="https://www.linkedin.com/in/carmel-amarilio/" target="_blank" rel="noopener noreferrer" title="Linkedin">  <button><img src={linkedinIcon} alt="" /></button></a>
                <a href="https://www.youtube.com/@carmelamarilio2014" target="_blank" rel="noopener noreferrer" title="Youtube">  <button><img src={youtubeIcon} /></button></a>
                <a href='tel:0543488402' target="_blank" rel="noopener noreferrer" title="Phone">  <button><img src={phoneIcon} /></button></a>
                <a href="mailto:amarilio.carmel@gmail.com" target="_blank" rel="noopener noreferrer" title="Gmail">  <button><img src={gmailIcon} /></button></a>
            </nav>

            <article className="content flex column align-center justify-center gap30">
                <h1>Hey, I`m Carmel Amarilio</h1>

                <p>
                    A DevOps Engineer with hands-on experience in full stack development, combining automation, functionality, and user-centered design. With a background in Electronics and Computer Science, I focus on building scalable and efficient systems.
                </p>

                <button className="link-btn" onClick={() => onChengRout("/projects")}>  <button className="prim-btn"> Projects</button></button>
            </article>
        </section>
    )
}