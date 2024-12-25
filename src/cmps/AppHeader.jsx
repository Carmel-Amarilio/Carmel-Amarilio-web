import { Link } from "react-router-dom";
import { hamburgerIcon } from "../assets/img/indexIcons";
import { useState } from "react";

export function AppHeader() {
    const [isNav, setIsNav] = useState(false)

    function toggleNav() {
        setIsNav(!isNav)
    }
    return (
        <header className="app-header main-container full">
            <section className=" flex align-center space-between">
                <article className="flex align-center gap10 ">
                    <img src="../../src/assets/img/CarmelProfile.jpg" alt="" className="profile" />
                    <Link className="link-btn" to="/"><h2 className="name">Carmel Amarilio</h2></Link>
                </article>

                <button className="van-btn" onClick={toggleNav}><img src={hamburgerIcon} /></button>

                <nav className={`flex gap20 ${isNav ? '' : 'close'}`} onClick={toggleNav}>
                    <Link className="link-btn" to="/">Home</Link>
                    <Link className="link-btn" to="/about">About</Link>
                    <Link className="link-btn" to="/projects">Projects</Link>
                    <Link className="link-btn" to="/skills">Skills</Link>
                </nav>
                <div onClick={toggleNav} className={`nav-back ${isNav ? '' : 'close'}`}></div>
            </section>
        </header>
    )
}