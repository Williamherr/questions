import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getWeatherIcon } from "@/lib/date";
import { Droplet } from "lucide-react";

const DayCards = ({
  weather,
  day,
  temp,
  precipitation,
  setHourPanel,
}: {
  weather: string;
  day: string;
  temp: number;
  precipitation: number;
  setHourPanel?: () => void;
}) => {
  const weatherIcon = getWeatherIcon(weather);
  return (
    <Card
      className={`inline-block hover:opacity-65${
        !setHourPanel ? "hover:opacity-65" : ""
      }`}
      onClick={setHourPanel}
    >
      <div className="flex flex-col text-center items-center p-4 gap-4">
        <div>{day}</div>
        <div>{weatherIcon}</div>
        <div>{temp} F</div>
        <div className="flex text-xs items-center">
          <Droplet color="blue" />
          {precipitation}%
        </div>
      </div>
    </Card>
  );
};

export default DayCards;
