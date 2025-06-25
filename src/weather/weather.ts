export async function getCurrentTemperature(
  latitude: number,
  longitude: number
) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch weather');
  }

  const data = await res.json();

  return data.current_weather?.temperature;
}
