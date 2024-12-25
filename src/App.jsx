import { HashRouter as Router, useLocation } from 'react-router-dom';
import './assets/styles/main.scss';

import { AppHeader } from './cmps/AppHeader';
import { Home } from './views/Home';
import { About } from './views/About';
import { useEffect, useRef } from 'react';
import { Projects } from './views/Projects';
import { Skills } from './views/Skills';
import { AppFooter } from './cmps/AppFooter';

function AppContent() {
  const location = useLocation();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '/about':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '/projects':
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '/skills':
        skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <main>
      <div ref={homeRef}> <Home /> </div>
      <div ref={aboutRef}> <About /> </div>
      <div ref={projectsRef}> <Projects /> </div>
      <div ref={skillsRef}> <Skills /> </div>

    </main>
  );
}

export function App() {
  return (
    <Router>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </Router>
  );
}

export default App;