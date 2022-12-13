import React from "react";
import SearchBar from "./searchBar/searchBar";
import HomePage from "./HomePage/homePage";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home-container">
      <SearchBar />
      <HomePage />
    </div>
  );
}
