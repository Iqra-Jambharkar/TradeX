import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

// import Navbar from "../Navbar";
// import Footer from "../Footer";

function ProductPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="media/images/kite.png"
        productName="TradeX Dashboard"
        productDescription="A fast and intuitive trading dashboard to track markets, manage portfolios, and execute simulated trades with ease."
        tryDemo="Try demo"
        LearnMore="Learn more"
        googlePlay="Google Play"
        appStore="App Store"
      />

      <RightSection
        imageURL="media/images/console.png"
        productName="TradeX Console"
        productDescription="A detailed analytics and reporting platform to monitor performance, analyze trades, and gain insights."
        learnMore="Learn more"
      />

      <LeftSection
        imageURL="media/images/coin.png"
        productName="TradeX Coin"
        productDescription="A simple platform to explore and invest in mutual funds with a clean interface, zero distractions, and long-term focus."
        tryDemo="Try demo"
        LearnMore="Learn more"
        googlePlay="Google Play"
        appStore="App Store"
      />

      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="A detailed analytics and reporting platform to monitor performance, analyze trades, and gain insights."
        learnMore="Learn more"
      />

      <LeftSection
        imageURL="media/images/varsity.png"
        productName="TradeX Learn"
        productDescription="An interactive learning app to understand stock markets, trading concepts, and investing strategies in a simple and structured way."
        tryDemo="Try demo"
        LearnMore="Learn more"
        googlePlay="Google Play"
        appStore="App Store"
      />

      

      <Universe />
    </>
  );
}

export default ProductPage;