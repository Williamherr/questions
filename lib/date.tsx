import { Sun, CloudRain, Cloud } from "lucide-react";

const filterData = (data: any) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return data.map((item: any) => {
    const [date, time] = item.dt_txt.split(" ");
    const day = days[new Date(date).getDay()];

    return {
      precipitaion: Math.round(item.pop * 100),
      humidity: item.main.humidity,
      temp: KtoF(item.main.temp),
      wind: item.wind.speed,
      weather: item.weather[0].main,
      date,
      time: formatTime(time),
      day,
    };
  });
};

function formatTime(time: string) {
  let [hour] = time.split(":");
  const period = +hour >= 12 ? "PM" : "AM";
  hour = String(+hour % 12 || 12);
  const formattedTime = `${hour} ${period}`;
  return formattedTime;
}

function KtoF(kelvin: number) {
  return Math.round(((kelvin - 273.15) * 9) / 5 + 32);
}

const getWeatherIcon = (weather: string) => {
  switch (weather) {
    case "Clear":
      return <Sun color="orange" size={48} />;
    case "Rain":
      return <CloudRain color="blue" size={48} />;
    case "Clouds":
      return <Cloud color="grey" size={48} />;
    default:
      return <Sun color="orange" size={48} />;
  }
};

const groupByDay = (data: WeatherData[]) => {
  const grouped = data.reduce((acc: any, item: WeatherData) => {
    const date = new Date(item.date);
    const day = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;

    if (!acc[day]) {
      acc[day] = [];
    }

    acc[day].push(item);

    return acc;
  }, {});

  return Object.values(grouped);
};

export { filterData, groupByDay, getWeatherIcon };
