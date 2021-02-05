import React from "react";
import "./home.css";
import { Product } from "../index";

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <img
          className="homeImage"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="homeRow">
          <Product
            id="123456"
            title="Altra Lone Peak"
            price={120.99}
            image="https://m.media-amazon.com/images/I/61FoTKMEutL._AC_UL640_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="123457"
            title="Playstation 5 Console"
            price={499.99}
            image="https://m.media-amazon.com/images/I/619BkvKW35L._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="homeRow">
          <Product
            id="123458"
            title="God of War - Playstation 4"
            price={19.99}
            image="https://m.media-amazon.com/images/I/811czebxtnL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="123459"
            title="DualSense Wireless Controller"
            price={69.98}
            image="https://m.media-amazon.com/images/I/61o7ai+YDoL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="1234510"
            title="Amazon Basics Cast Iron Kettlebell Weight"
            price={48.99}
            image="https://m.media-amazon.com/images/I/71GaeXREbSL._AC_UL640_FMwebp_QL65_.jpg"
            rating={3}
          />
        </div>
        <div className="homeRow">
          <Product
            id="12345611"
            title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black"
            price={1090.84}
            image="https://m.media-amazon.com/images/I/71916r38cNL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="12345612"
            title="Apple MacBook Pro with Intel Processor (13-inch, 16GB RAM, 512GB SSD Storage) - Space Gray"
            price={1649.98}
            image="https://m.media-amazon.com/images/I/71bElkQQ7LL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
