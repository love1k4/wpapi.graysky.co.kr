import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from './components/Posts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
