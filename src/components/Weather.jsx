import React from "react";

const Weather = (props) => {
  const weatherData = props.weather?.list
  const city = props.weather?.city

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Weather Forecast for: {city?.name}</h1>
      <p className="text-lg mb-2">Location: {city?.coord?.lat}, {city?.coord?.lon}</p>
      <p className="text-lg mb-4">Country: {city?.country}</p>
      
      <div className="flex items-center border border-blue-600 rounded-full overflow-hidden mb-6">
        <input
          type="text"
          value={props.search}
          placeholder="Enter city/town..."
          onChange={(e) => props.setSearch(e.target.value)}
          className="pl-2 w-full text-base text-gray-700 placeholder-gray-500 focus:outline-none rounded-l-full"
        />
        <button
          onClick={props.searchPressed}
          className="bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-r-full"
        >
          Search
        </button>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-3">Upcoming Weather Forecast:</h2>
        <div className="space-y-4 max-h-80 overflow-y-auto">
          {weatherData?.map((data, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow">
              <p><strong>Date/Time:</strong> {data.dt_txt}</p>
              <p><strong>Temperature:</strong> {Math.round(data.main.temp - 273.15)} °C</p>
              <p><strong>Feels Like:</strong> {Math.round(data.main.feels_like - 273.15)} °C</p>
              <p><strong>Humidity:</strong> {data.main.humidity} %</p>
              <p><strong>Weather:</strong> {data.weather[0]?.description}</p>
              <div className="flex items-center space-x-2">
                <p><strong>Icon:</strong></p>
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0]?.icon}@2x.png`}
                  alt={data.weather[0]?.description}
                  className="w-8 h-8"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
