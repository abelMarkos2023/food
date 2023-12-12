import React from "react";
import Categories from "./Components/Categories";
import Food from "./Components/Food";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import TopCard from "./Components/TopCard";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopCard />
      <Food />
      <Categories />
    </div>
  );
};

export default App;
