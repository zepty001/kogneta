import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import HowWeHelp from './pages/HowWeHelp/HowWeHelp';
import Career from './pages/Career/Career';
import Blog from './pages/Blog/Blog';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={< About/>} />
      <Route path="/how we help" element={<HowWeHelp />} />
      <Route path='/careers' element={<Career/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
