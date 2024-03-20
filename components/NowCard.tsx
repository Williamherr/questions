import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getWeatherIcon } from "@/lib/date";
import { Droplet, CloudRain, Wind } from "lucide-react";

const NowCard = ({
  location,
  date,
  temp,
  weather,
  precipitation,
  humidity,
  wind,
  day,
}: {
  location: string;
  date: string;
  temp: number;
  weather: string;
  precipitation: number;
  humidity: number;
  wind: number;
  day: string;
}) => {
  const weatherIcon = getWeatherIcon(weather);

  return (
    <Card className="inline-block">
      <CardHeader className="text-center pb-1">
        <CardTitle>{location}</CardTitle>
        <CardDescription>
          <div>{day}</div>
          <div>{date}</div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col text-left items-center p-2 gap-4">
          <div>{weatherIcon}</div>
          <div>{temp} F</div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <Droplet color="blue" /> Precipitation: {precipitation}%
            </div>
            <div className="flex gap-2">
              <CloudRain color="gray" /> Humidity: {humidity}%
            </div>
            <div className="flex gap-2">
              <Wind color="green" /> Wind: {wind} mph
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NowCard;
