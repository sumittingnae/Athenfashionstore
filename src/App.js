
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home';
import Contact from './page/Contact/Contact';
import Product from "./page/Shop/Shop"
import Blog from './page/Blog/blog';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
