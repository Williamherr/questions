"use client";

import DayCards from "@/components/DayCards";
import NowCard from "@/components/NowCard";
import { DayCardSkeleton, NowCardSkeleton } from "@/components/Skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

const WeatherWithApi = () => {
  const [city, setCity] = useState("New York");
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setweatherData] = useState<WeatherData[][] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hourPanel, setHourPanel] = useState(0);
  const cities: Cities = require("@/lib/cities.json");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setCity(searchTerm.trim());
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`api/owm?id=${cities[city]}`)
      .then((response) => response.json())
      .then((data) => {
        setweatherData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  }, [city]);

  const handleClick = (index: number) => {
    setHourPanel(index);
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
      {isLoading ? (
        <>
          <div className="flex gap-2 mt-2">
            <NowCardSkeleton />
            <div className="flex flex-col gap-1 justify-between">
              <div className="flex gap-1">
                {[...Array(6)].map((_, index) => (
                  <DayCardSkeleton key={index} />
                ))}
              </div>
              <div className="flex gap-1">
                {[...Array(6)].map((_, index) => (
                  <DayCardSkeleton key={index} />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {weatherData && weatherData[hourPanel][0] ? (
            <div className="flex gap-1 mt-2">
              <NowCard
                location={city}
                day={
                  hourPanel === 0 ? "Today" : `${weatherData[hourPanel][0].day}`
                }
                precipitation={weatherData[hourPanel][0].precipitaion}
                humidity={weatherData[hourPanel][0].humidity}
                temp={weatherData[hourPanel][0].temp}
                wind={weatherData[hourPanel][0].wind}
                date={weatherData[hourPanel][0].date}
                weather={weatherData[hourPanel][0].weather}
              />
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  {weatherData[hourPanel].map(
                    (item: WeatherData, index: number) => (
                      <div key={index} className="flex flex-col">
                        <DayCards
                          weather={item.weather}
                          temp={item.temp}
                          day={item.time}
                          precipitation={item.precipitaion}
                        />
                      </div>
                    )
                  )}
                </div>
                <div className="flex gap-1">
                  {weatherData.map((item: WeatherData[], index: number) => (
                    <div key={index} className="flex flex-col">
                      <DayCards
                        weather={item[0].weather}
                        temp={item[0].temp}
                        day={index === 0 ? "Now" : item[0].day.slice(0, 3)}
                        precipitation={item[0].precipitaion}
                        setHourPanel={() => handleClick(index)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <h1 className="text-2xl font-bold my-4">City not found</h1>
          )}
        </>
      )}
    </div>
  );
};

export default WeatherWithApi;
