// import logo from './logo.svg';
import "./global.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./conponents/header";
import Footer from "./conponents/footer";
import HeroBanner from "./conponents/sections/heroBanner";
import Featured from "./conponents/sections/featured";
import ListPosts from "./conponents/sections/listposts";
import ThreeColGrid from "./conponents/sections/threecolgrid";
import Details from "./conponents/sections/details";
import DataTable from "./conponents/sections/dataGrid";
import SEOHead from "./conponents/seohead";
function App() {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    axios.get("https://api.spacexdata.com/v3/rockets?pretty=true&limit=10", requestOptions)
    .then((response) => setRockets(response.data));
  },[])

  return (
    <div className="App">
      <SEOHead/>
      <Header data={rockets}/>
      <HeroBanner></HeroBanner>
      <Featured data={rockets} />
      <ListPosts data={rockets} />
      <Details data={rockets} show={false}/>
      <ThreeColGrid data={rockets} />
      <Details data={rockets} show={true}/>
      <DataTable data={rockets}/>
      <Footer />
      
    </div>
  );
}

export default App;
