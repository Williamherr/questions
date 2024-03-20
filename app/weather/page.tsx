"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

type WeatherData = {
  temperature: string;
  humidity: string;
  windSpeed: string;
};

type Cities = {
  [key: string]: WeatherData;
};

const Weather = () => {
  const [city, setCity] = useState("New York");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setCity(searchTerm.trim());
  };

  const weatherData: Cities = {
    "New York": { temperature: "20°C", humidity: "30%", windSpeed: "10km/h" },
    London: { temperature: "15°C", humidity: "40%", windSpeed: "15km/h" },
    Tokyo: { temperature: "25°C", humidity: "35%", windSpeed: "20km/h" },
  };

  return (
    <div className="border-2 p-4">
      <div className="flex ">
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button onClick={handleSearch}>
          <SearchIcon size={24} />
        </Button>
      </div>
      {weatherData[city] ? (
        <div>
          <h1 className="text-2xl font-bold my-4">{city}</h1>
          <div>
            <p>Temperature: {weatherData[city].temperature}</p>
            <p>Humidity: {weatherData[city].humidity}</p>
            <p>Wind Speed: {weatherData[city].windSpeed}</p>
          </div>
        </div>
      ) : (
        <h1 className="text-2xl font-bold my-4">City not found</h1>
      )}
    </div>
  );
};

export default Weather;
