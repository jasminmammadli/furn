import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import Routing from "./Routing/Routing";
import { useLocation } from "react-router-dom";
import DataContext from "./context/DataContext";
import axios from "axios";
import FooterOverSection from "./components/ui/footerOver";
function App() {
  const { pathname } = useLocation();
  const [productData,setProductData]=useState(null)
  useEffect(() => {
    axios
      .get("https://raw.githubusercontent.com/jasminmammadli/furndata/master/data.json")
      .then((res) => {setProductData(res.data.products),console.log(res.data.products)})
      .catch(err=>console.log(err))
  }, []);

  return (
    <DataContext.Provider value={{productData,setProductData}}>
      {pathname !== "/login" && <Header />}
      <main>
        <Routing />
      </main>

      {pathname !== "/login" && <>
      <FooterOverSection/>
      <Footer />
      </>
      }
    </DataContext.Provider>
  );
}

export default App;
