
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import Contactus from './Components/Contactus';
import Project from './Components/Project';
import Skill from './Components/Skill';
import Contactme from './Components/Contactme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contactus/>} />
        <Route path='/Skill' element= {<Skill />} />
        <Route path="/project" element={<Project/>}></Route>
        <Route path='/contactme' element={<Contactme/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
