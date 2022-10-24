import { Route, Routes } from 'react-router-dom';
import CustomNav from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import './App.css';
import Laptops from './Pages/Laptops/Laptops';
import Smartphones from './Pages/Smartphones/Smartphones';
import Fragrances from './Pages/Fragnances/Fragrances';
import Skincares from './Pages/Skincare/Skincares';
import Groceries from './Pages/Groceries/Groceries';
import HomeDecorations from './Pages/Home-Decorations/HomeDecorations';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <CustomNav />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/fragrances" element={<Fragrances />} />
        <Route path="/skincares" element={<Skincares />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/home-decorations" element={<HomeDecorations />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
