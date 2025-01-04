import { AllImgs } from "../cmps/AllImgs";


import { airCncImgs, appsusImgs, apptImgs, gameImgs, memeitImgs, mirrobImgs, TzevaAdomStatisticsImgs } from "../assets/img/indexPrjImg";

export function Projects() {
    return (
        <section className="projects main-container full " >
            <section className="flex column">
                <h1 className="head-page">Projects</h1>
                <h3 className="sub-header-page">Here you will find some of the projects that I created with each project containing its own case study</h3>

                <section className="prj-list flex column gap30">

                    <article className="prj">
                        <div className="imgs">
                            <AllImgs imgsUrl={airCncImgs} />
                        </div>
                        <div className="prj-details flex justify-center column space-between ">
                            <h1 className="prj-name">Aircnc</h1>
                            <p>Aircnc was my capstone project for a full-stack development bootcamp, inspired by Airbnb. Built with JavaScript, React, SCSS, Node.js, and MongoDB, it delivers a pixel-perfect design and a seamless user experience, showcasing my skills in modern web development.</p>
                            <div className="btn-sec flex gap30">
                                <a href="https://aircnc-atzm.onrender.com/#/stay" target="_blank" rel="noopener noreferrer"><button className="prim-btn">Web</button></a>
                                <a href="https://github.com/Carmel-Amarilio/aircnc" target="_blank" rel="noopener noreferrer"><button className="prim-btn">Code</button></a>
                            </div>
                        </div>
                    </article>

                    <article className="prj">
                        <div className="imgs">
                            <AllImgs imgsUrl={TzevaAdomStatisticsImgs} />
                        </div>
                        <div className="prj-details flex justify-center column space-between ">
                            <h1 className="prj-name">Tzeva Adom Statistics</h1>
                            <p>Tzeva Adom Statistics is a project I built during the Iron Swords war to help users understand the alert situation in their area. Developed with TypeScript, React, SCSS, Material-UI, and Google Maps API, it provides a clear, user-friendly interface for real-time insights.</p>
                            <div className="flex gap30">
                                <a href="https://carmel-amarilio.github.io/Tzeva-Adom-Statistics/#/?nav=map&startDate=2023-10-07&endDate=2024-12-23&threatSelect=0,2,3,5&areaSelect=1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,32,34,35" target="_blank" rel="noopener noreferrer"><button className="prim-btn">Web</button></a>
                                <a href="https://github.com/Carmel-Amarilio/Tzeva-Adom-Statistics" target="_blank" rel="noopener noreferrer"><button className="prim-btn">Code</button></a>
                            </div>
                        </div>
                    </article>

                    <article className="prj">
                        <div className="imgs">
                            <AllImgs imgsUrl={apptImgs} />
                        </div>
                        <div className="prj-details flex justify-center column space-between ">
                            <h1 className="prj-name">appt</h1>
                            <p>Appt is a project designed to connect service providers with customers seamlessly. Built using TypeScript, React, SCSS, Node.js, and MongoDB, it provides an intuitive platform for scheduling and managing appointments, improving communication and efficiency for both service providers and customers.</p>
                            <div className="flex gap30">
                                <a href="https://appt-s5nz.onrender.com/#/" target="_blank" rel="noopener noreferrer"><button className="prim-btn">Web</button></a>
                                <a href="https://github.com/Carmel-Amarilio/appt" target="_blank" rel="noopener noreferrer"><button className="prim-btn">Code</button></a>
                            </div>
                        </div>
                    </article>

                    <article className="prj">
                        <div className="imgs">
                            <AllImgs imgsUrl={appsusImgs} />
                        </div>
                        <div className="prj-details flex justify-center column space-between ">
                            <h1 className="prj-name">Appsus</h1>
                            <p>Appsus is the first project I built with React, created without using the CLI. I developed this project during my first week of learning React, working as part of a team. We utilized Git and branches for version control. Built with JavaScript, React, and CSS, it offers two applications similar to Google Mail and Google Keep. I was responsible for the email application, ensuring seamless functionality for managing emails and user interactions.</p>
                            <div className="flex gap30">
                                <a href="https://carmel-amarilio.github.io/Appsus/#/email/inbox" target="_blank" rel="noopener noreferrer"><button className="prim-btn">Web</button></a>
                                <a href="https://github.com/Carmel-Amarilio/Appsus" target="_blank" rel="noopener noreferrer"><button className="prim-btn">Code</button></a>
                            </div>
                        </div>
                    </article>

                    <article className="prj">
                        <div className="imgs">
                            <AllImgs imgsUrl={memeitImgs} />
                        </div>
                        <div className="prj-details flex justify-center column space-between ">
                            <h1 className="prj-name">MemeIt</h1>
                            <p>MemeIt is an application for creating memes, built with Vanilla JavaScript. It uses Local Storage and supports CRUD operations with an MVC architecture. The app is developed using HTML5, CSS, and JavaScript, providing users with an intuitive platform for generating and managing memes.</p>
                            <div className="flex gap30">
                                <a href="https://carmel-amarilio.github.io/Meme-It/" target="_blank" rel="noopener noreferrer"><button className="prim-btn">Web</button></a>
                                <a href="https://github.com/Carmel-Amarilio/Meme-It" target="_blank" rel="noopener noreferrer"><button className="prim-btn">Code</button></a>
                            </div>
                        </div>
                    </article>

                    <article className="prj">
                        <div className="imgs">
                            <AllImgs imgsUrl={gameImgs} />
                        </div>
                        <div className="prj-details flex justify-center column space-between ">
                            <h1 className="prj-name">Game Development Projects</h1>
                            <p>Game Development Projects include the development of several games using Unity and C#. These projects showcase my skills in game design, mechanics, and programming, leveraging Unity’s powerful engine and C# scripting to create engaging and interactive gaming experiences.</p>
                            <div className="flex gap30">
                                <a href="https://carmel-amarilio.itch.io/" target="_blank" rel="noopener noreferrer"><button className="prim-btn">Game portal</button></a>
                            </div>
                        </div>
                    </article>

                    <article className="prj">
                        <div className="imgs">
                            <AllImgs imgsUrl={mirrobImgs} />
                        </div>
                        <div className="prj-details flex justify-center column space-between ">
                            <h1 className="prj-name">Mirrobot - Final Project Study</h1>
                            <p>Mirrobot is the Final Project Study of my Practical Engineer program in Electronics and Computer. The project won third place in a nationwide project competition in Israel. It uses Arduino, Kinect, 19 motors, C#, and C++ to create a robot that mimics human movements through a Kinect camera, translating them into motor actions on the robot.</p>
                            <div className="flex gap30">
                                <a href="https://www.youtube.com/watch?v=cBO_fx7q-Pg" target="_blank" rel="noopener noreferrer"><button className="prim-btn">Project video</button></a>
                            </div>
                        </div>
                    </article>

                </section>

            </section>
        </section >

    )
}