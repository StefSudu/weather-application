import './App.css'
import SearchBar from "./components/searchBar";
import { useState } from 'react';

function App() {
  const [weatherCards, setWeatherCards] = useState([]);

  const handleSearch = (newWeatherCard) => {
    setWeatherCards([...weatherCards, newWeatherCard]);
  };

  return (
    <div className="App">
      <div className="searchBarContainer">
        <SearchBar placeholder="Enter a country or city to see the weather" onSearch={handleSearch}/>
      </div>
      <div className="WeatherCardContainer">
        {weatherCards.length > 0 ? weatherCards.map((card, index) => (
          <div className="eachCardContainer" key={index}>
            {card}
          </div>
        )) : ' '}
      </div>
    </div>
  );
}

export default App;
