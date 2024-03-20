import { filterData, groupByDay } from "@/lib/date";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cityId = searchParams.get("id");
  const url = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${process.env.OPEN_WEATHER_API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const filteredData = filterData(data.list);
    const groupedData = groupByDay(filteredData);

    return NextResponse.json(groupedData, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
