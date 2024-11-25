import './App.scss'
import { Route, Routes ,useLocation} from 'react-router-dom';
import logo from './logo.svg';
import About from './container/about';
import Home from './container/home';
import Skills from './container/skills';
import Portfolio from './container/portfolio';
import Contact from './container/contact';
import Navbar from './Components/navbar';
import Resume from './container/resume'; 
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react"; 
import { loadSlim } from "@tsparticles/slim";
import particles from './utils.js/particles';

function App() {

  const location =useLocation();

  const isparticalehomepage=location.pathname ==='/';
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      
      await loadSlim(engine); 
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
   
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#1d1d1d",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.2,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if(init){
  return (<>
  <div className='app'>  {
    isparticalehomepage && 
    (<Particles
    id="tsparticles"
    particlesLoaded={particlesLoaded}
    options={options}
  />
  )}
 
  <div>
    <Navbar></Navbar>
  </div>
    <div className='app-main-page-contain'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
      </Routes>
    </div>
    </div>
    </>
  );}
 return <></>
}

export default App;
