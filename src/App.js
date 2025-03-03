
import './App.css';
import {Skills} from './components/Skills'
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
