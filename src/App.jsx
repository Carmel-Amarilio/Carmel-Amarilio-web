import { HashRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import './assets/styles/main.scss';

import { AppHeader } from './cmps/AppHeader';
import { Home } from './views/Home';
import { About } from './views/About';
import { useEffect, useRef } from 'react';
import { Projects } from './views/Projects';
import { Skills } from './views/Skills';
import { AppFooter } from './cmps/AppFooter';

export function AppContent() {
  const navigate = useNavigate()
  const location = useLocation()

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)


  const sectionRefs = {
    '/': homeRef,
    '/about': aboutRef,
    '/projects': projectsRef,
    '/skills': skillsRef,
  }

  useEffect(() => {
    sectionRefs[location.pathname]?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      Object.entries(sectionRefs).forEach(([path, ref]) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (location.pathname !== path) navigate(path)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigate, location.pathname, sectionRefs])

  function onChengRout(to) {
    sectionRefs[to]?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <AppHeader onChengRout={onChengRout} />
      <main>
        <div ref={homeRef}> <Home onChengRout={onChengRout} /> </div>
        <div ref={aboutRef}> <About /> </div>
        <div ref={projectsRef}> <Projects /> </div>
        <div ref={skillsRef}> <Skills /> </div>

      </main>
      <AppFooter />
    </>
  );
}

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;