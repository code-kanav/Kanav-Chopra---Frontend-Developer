// import logo from './logo.svg';
import "./global.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./conponents/header";
import Footer from "./conponents/footer";
import HeroBanner from "./conponents/sections/heroBanner";
import Banner from "./conponents/sections/banner";
import ListPosts from "./conponents/sections/listposts";
import ThreeColGrid from "./conponents/sections/threecolgrid";
import Details from "./conponents/sections/details/details";
import DataTable from "./conponents/sections/dataGrid";
function App() {
  const [rockets, setRockets] = useState([]);

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  const fetchData = () => {
    return axios.get("https://api.spacexdata.com/v3/rockets?pretty=true&limit=10", requestOptions)
          .then((response) => setRockets(response.data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className="App">
      <Header/>
      <HeroBanner></HeroBanner>
      <Banner data={rockets} />
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
