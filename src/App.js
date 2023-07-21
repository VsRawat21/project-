import './App.scss';
import Navbar from "./navbar";
import CardMain from "./card";
import Footer from "./footer";
import ShoppingPage from "./shoppingpage";
import { Routes, Route } from 'react-router-dom';
import Random from './random';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shoppingPage' element={<ShoppingPage />} />
        <Route path='/random' element={<Random />} />
      </Routes>
    </>
  );
}

function HomePage() {
  return (
  <>
    <Navbar />
    <CardMain />
    <Footer />
  </>
  )

}

export default App;
