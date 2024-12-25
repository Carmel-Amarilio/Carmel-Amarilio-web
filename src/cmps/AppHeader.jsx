import { Link } from "react-router-dom";

export function AppHeader() {
    return (
        <header className="app-header main-container full">
            <section className=" flex align-center space-between">
                <article className="flex align-center gap10 ">
                    <img src="../../src/assets/img/CarmelProfile.jpg" alt="" className="profile" />
                    <h2 className="name">Carmel Amarilio</h2>
                </article>

                <nav className="flex gap20">
                    <Link className="link-btn" to="/">Home</Link>
                    <Link className="link-btn" to="/about">About</Link>
                    <Link className="link-btn" to="/projects">Projects</Link>
                    <Link className="link-btn" to="/skills">Skills</Link>
                </nav>
            </section>
        </header>
    )
}