import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from './components/Section';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/cart'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Section/>} />
      <Route path='/Cart' element={<Cart/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
