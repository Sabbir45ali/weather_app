import React from "react";
import Plot from "react-plotly.js";

const WeatherGraph = ({ weather }) => {
  if (!weather || !weather.list) {
    return <p className="text-center text-gray-600">Loading weather data...</p>;
  }

  const labels = weather.list.map((data) => data.dt_txt);
  const temperatures = weather.list.map((data) =>
    Math.round(data.main.temp - 273.15)
  );

  return (
    <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-lg shadow-xl w-full max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Temperature Trend for {weather.city?.name}
      </h2>
      <Plot
        className="w-full"
        data={[
          {
            x: labels,
            y: temperatures,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "#3B82F6", size: 6 },
            line: { color: "#1E3A8A", width: 2, shape: "spline" },
          },
        ]}
        layout={{
          title: "",
          xaxis: {
            title: {
              text: "Time",
              font: { size: 14, color: "#1F2937" },
            },
            tickangle: -45,
            showgrid: false,
            zeroline: false,
          },
          yaxis: {
            title: {
              text: "Temperature (°C)",
              font: { size: 14, color: "#1F2937" },
            },
            showgrid: true,
            gridcolor: "#D1D5DB",
          },
          margin: { t: 10, l: 40, r: 20, b: 50 },
          plot_bgcolor: "#F9FAFB",
          paper_bgcolor: "transparent",
          hovermode: "x unified",
        }}
        style={{ width: "100%", height: "450px" }}
        config={{ responsive: true }}
      />
    </div>
  );
};

export default WeatherGraph;
