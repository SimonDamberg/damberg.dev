import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Transition } from '@headlessui/react'
import { useEffect, useState } from 'react';
import SideBarItem from './components/SideBarItem.Component';
import About from './components/About.Component';
import Projects from './components/Projects.Component';
import Blog from './components/Blog.Component';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showDot, setShowDot] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowDot(!showDot)
    }, 600)
    return () => clearInterval(interval)
  }, [showDot])

  const getActiveSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />
      case 'projects':
        return <Projects/>
      case 'blog':
        return <Blog/>
      default:
        return <About/>
    }
  }
  // TODO background gradient
  return (
    <div className="flex h-screen bg-slate-700 flex-col">
      <Transition show={!isLoading} enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100">
        <div className='flex justify-between'>
          {getActiveSection()}
          <div className='flex flex-col items-center justify-center h-screen pr-96'>
            <SideBarItem title="about" onClick={() => setActiveSection('about')} active={activeSection === 'about'}/>
            <SideBarItem title="projects" onClick={() => setActiveSection('projects')} active={activeSection === 'projects'}/>
            <SideBarItem title="blog" onClick={() => setActiveSection('blog')} active={activeSection === 'blog'}/>
          </div></div>
        <div className='flex flex-row justify-center bg-slate-700 pb-8 sm:pb-24'>
          <a href='https://github.com/SimonDamberg/'><FontAwesomeIcon className='transistion ease-in-out transition-colors p-2 text-white hover:text-gray-500 text-4xl sm:text-8xl' icon={faGithub} /></a>
          <a href='https://www.linkedin.com/in/simon-damberg/'><FontAwesomeIcon className='transistion ease-in-out transition-colors p-2 text-white hover:text-gray-500 text-4xl sm:text-8xl' icon={faLinkedin} /></a>
          <a href="mailto:simon@damberg.dev"><FontAwesomeIcon className='transistion ease-in-out transition-colors p-2 text-white hover:text-gray-500 text-4xl sm:text-8xl' icon={faEnvelope} /></a>
        </div>
        </Transition>
    </div>)

  // return (
  //   <div className="flex h-screen bg-slate-700 flex-col">
  //     <Transition show={!isLoading} enter="transition-opacity duration-1000"
  //       enterFrom="opacity-0"
  //       enterTo="opacity-100" className="flex h-screen">
  //       <div className='m-auto'>
  //         <p className='text-5xl sm:text-9xl font-bold text-white drop-shadow-lg'>
  //           Coming soon..<Transition
  //           as="span"
  //             show={showDot}
  //             enter="transition-opacity duration-700"
  //             enterFrom="opacity-0"
  //             enterTo="opacity-100"
  //             leave="transition-opacity duration-700"
  //             leaveFrom="opacity-100"
  //             leaveTo="opacity-0"
  //           >.</Transition>
  //         </p>
  //         <div className='flex flex-row justify-center pt-4 sm:pt-12'>
  //           <a href='https://github.com/SimonDamberg/'><FontAwesomeIcon className='transistion ease-in-out transition-colors p-2 text-white hover:text-gray-500 text-4xl sm:text-8xl' icon={faGithub} /></a>
  //           <a href='https://www.linkedin.com/in/simon-damberg/'><FontAwesomeIcon className='transistion ease-in-out transition-colors p-2 text-white hover:text-gray-500 text-4xl sm:text-8xl'icon={faLinkedin} /></a>
  //           <a href="mailto:simon@damberg.dev"><FontAwesomeIcon className='transistion ease-in-out transition-colors p-2 text-white hover:text-gray-500 text-4xl sm:text-8xl' icon={faEnvelope} /></a>
  //         </div>
  //       </div>
  //     </Transition>
  //     </div>
  // );
}

export default App;


