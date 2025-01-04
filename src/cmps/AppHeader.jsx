import { hamburgerIcon, meImg } from "../assets/img/indexIcons";
import { useState } from "react";

export function AppHeader({ onChengRout }) {
    const [isNav, setIsNav] = useState(false)

    function toggleNav() {
        setIsNav(!isNav)
    }

    return (
        <header className="app-header main-container full">
            <section className=" flex align-center space-between">
                <article className="flex align-center gap10 ">
                    <img src={meImg} alt="" className="profile" />
                    <button className="link-btn" onClick={() => onChengRout("/")}><h2 className="name">Carmel Amarilio</h2></button>
                </article>

                <button className="van-btn" onClick={toggleNav}><img src={hamburgerIcon} /></button>

                <nav className={`flex gap20 ${isNav ? '' : 'close'}`} onClick={toggleNav}>
                    <button className="link-btn" onClick={() => onChengRout("/")}>Home</button>
                    <button className="link-btn" onClick={() => onChengRout("/about")}>About</button>
                    <button className="link-btn" onClick={() => onChengRout("/projects")}>Projects</button>
                    <button className="link-btn" onClick={() => onChengRout("/skills")}>Skills</button>
                </nav>
                <div onClick={toggleNav} className={`nav-back ${isNav ? '' : 'close'}`}></div>
            </section>
        </header>
    )
}