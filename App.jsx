import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const AboutMe = lazy(() => import('./components/AboutMe'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Resume = lazy(() => import('./components/Resume'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p style={{ textAlign: 'center', padding: '50px' }}>Loading...</p>}>
        <AboutMe />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
