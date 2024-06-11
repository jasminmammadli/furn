import React from "react";
import "./App.css";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import Routing from "./Routing/Routing";
import { useLocation } from "react-router-dom";
function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      {pathname !== "/login" && <Header />}
      <main>
        {/* <Routing /> */}
      </main>

      {pathname !== "/login" && <Footer />}
    </>
  );
}

export default App;
