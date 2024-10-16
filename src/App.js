
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import Experience from './components/Experience/Experience';
import About from './components/about/About';
import Contact from './components/contacts/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App" >
     <NavBar/>
     <Home/>
     <About/>
     <Skills/>
     {/* <Experience/> */}
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
