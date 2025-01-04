import { githubIconW, gmailIconW, linkedinIconW, phoneIconW, youtubeIconW } from "../assets/img/indexIcons";

export function AppFooter() {
    return (
        <footer className="app-footer main-container full">
            <section className="flex align-center space-between">
                <article className="name flex column gap20 ">
                    <h1>Carmel Amarilio</h1>
                    <p>A Full Stack Developer specializing in designing and building websites and applications with a focus on functionality, innovation, and delivering user-centered solutions.</p>
                </article>

                <article className="social flex column gap20">
                    <h1>Social</h1>

                    <div className="flex gap10">
                        <a href="https://github.com/Carmel-Amarilio" target="_blank" rel="noopener noreferrer" title="Github">  <button><img src={githubIconW} /></button></a>
                        <a href="https://www.youtube.com/@carmelamarilio2014" target="_blank" rel="noopener noreferrer" title="Youtube">  <button><img src={youtubeIconW} /></button></a>
                        <a href="https://www.linkedin.com/in/carmel-amarilio/" target="_blank" rel="noopener noreferrer" title="Linkedin">  <button><img src={linkedinIconW} alt="" /></button></a>
                        <a href='tel:0543488402' target="_blank" rel="noopener noreferrer" title="Phone">  <button><img src={phoneIconW} /></button></a>
                        <a href="mailto:amarilio.carmel@gmail.com" target="_blank" rel="noopener noreferrer" title="Gmail">  <button><img src={gmailIconW} /></button></a>

                    </div>
                </article>

            </section>

            <p className="copyright">© Copyright 2024 . Made by Carmel Amarilio</p>

        </footer>
    )
}