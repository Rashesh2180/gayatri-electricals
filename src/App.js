import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { Helmet } from "react-helmet";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className=" bg-[#09092a] pb-10  h-full w-full ">
      <Helmet>
        <meta
          name="description"
          content="Explore a wide range of high-quality lights at the best prices. Free shipping and fast delivery!"
        />
        <meta
          name="keywords"
          content="buy lights online, affordable lights, LED lights, electrical products, light shop"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
    <div className=" w-full sticky top-0 z-50 ">
       <Header />
    </div>
      <main className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
