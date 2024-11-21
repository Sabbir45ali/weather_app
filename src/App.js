import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import WeatherGraph from "./components/WeatherGraph";

const api = {
  key: process.env.REACT_APP_WEATHER_API,
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const searchPressed = () => {
    if (search) {
      setLoading(true);
      fetch(`${api.base}forecast?q=${search}&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setWeather(result);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching weather data:", err);
          setLoading(false);
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-opacity-75"></div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Left: Heading */}
            <div className="lg:w-1/2 w-full">
              <Heading
                weather={weather}
                search={search}
                setSearch={setSearch}
                searchPressed={searchPressed}
              />
            </div>
            <div className="lg:w-1/2 w-full">
              {weather.list && <WeatherGraph weather={weather} />}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
