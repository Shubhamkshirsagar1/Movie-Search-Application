import React, { useState } from "react";
import Cards from "../Cards/Cards";
import "./LandingPage.css";
import NavBar from "../NavBar/NavBar";

const LandingPage = () => {
  const key = "dcda42c1";
  const [input, setInput] = useState("");
  const [storedData, setData] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleSearch = async () => {
    if (input !== "") {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${key}&s=${input.replace(" ", "+")}`
        );
        const data = await response.json();
        setData(data.Search ? data.Search : alert("Enter Valid Movie Name!!!"));
        console.log(data.Search);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <NavBar />
      <div className="search__title padding">
        <h3>Search For Movies By Their Title</h3>
      </div>
      <div className="search__bar padding">
        <input
          type="text"
          placeholder="Search..."
          value={input}
          onChange={handleChange}
        />
      </div>
      <div className="search__button padding">
        <button onClick={handleSearch}>Search Now!</button>
      </div>

      <Cards storedData={storedData} />
    </div>
  );
};

export default LandingPage;
