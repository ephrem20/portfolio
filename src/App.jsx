
import './App.css'
import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import LazySection from './components/LazySection'

const About = lazy(() => import('./components/About'))
const Service = lazy(() => import('./components/Service'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {

  return (
    <div>
        <Navbar />
        <Home />

        <Suspense fallback={null}>
          <LazySection id="about">
            <About />
          </LazySection>
        </Suspense>

        <Suspense fallback={null}>
          <LazySection id="service">
            <Service />
          </LazySection>
        </Suspense>

        <Suspense fallback={null}>
          <LazySection id="project">
            <Projects />
          </LazySection>
        </Suspense>

        <Suspense fallback={null}>
          <LazySection id="contact">
            <Contact />
          </LazySection>
        </Suspense>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
    </div>
  )
}

export default App
