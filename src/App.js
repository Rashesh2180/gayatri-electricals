import logo from './logo.svg';
import './App.css';
import { Outlet } from "react-router-dom";

import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className=" bg-[#09092a] pb-10  h-full w-full ">
      <Header/>
      <main className="min-h-[calc(100vh-120px)]">
      <Outlet />
      </main>
      <Footer/>

    </div>
  );
}

export default App;
