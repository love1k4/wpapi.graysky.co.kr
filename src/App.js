import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from './components/Posts';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Posts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/content/:postid" element={<Content />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
