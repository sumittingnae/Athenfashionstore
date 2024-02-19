
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home';
import Contact from './page/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
