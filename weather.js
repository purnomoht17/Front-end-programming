// Contoh JSON dari API cuaca
const weatherData = {
    "dt": 1731294000,
    "main": {
      "temp": 273.93,
      "feels_like": 271.27,
      "temp_min": 273.93,
      "temp_max": 274.37,
      "pressure": 1031,
      "sea_level": 1031,
      "grnd_level": 1013,
      "humidity": 71,
      "temp_kf": -0.44
    },
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }
    ],
    "clouds": {
      "all": 56
    },
    "wind": {
      "speed": 2.29,
      "deg": 328,
      "gust": 3.6
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2024-11-11 03:00:00"
  };
  
  // Fungsi untuk mengubah suhu dari Kelvin ke Celcius
  function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(2);
  }
  
  // Mengambil data penting dari JSON
  const date = weatherData.dt_txt; // Tanggal dan waktu data
  const temperature = kelvinToCelsius(weatherData.main.temp); // Suhu dalam Celcius
  const feelsLike = kelvinToCelsius(weatherData.main.feels_like); // Suhu terasa dalam Celcius
  const tempMin = kelvinToCelsius(weatherData.main.temp_min); // Suhu minimum dalam Celcius
  const tempMax = kelvinToCelsius(weatherData.main.temp_max); // Suhu maksimum dalam Celcius
  const pressure = weatherData.main.pressure; // Tekanan udara
  const humidity = weatherData.main.humidity; // Kelembaban
  const weatherDescription = weatherData.weather[0].description; // Deskripsi cuaca
  const windSpeed = weatherData.wind.speed; // Kecepatan angin
  const windDirection = weatherData.wind.deg; // Arah angin dalam derajat
  const cloudiness = weatherData.clouds.all; // Persentase awan
  
  // Menampilkan data
  console.log(`Tanggal dan waktu: ${date}`);
  console.log(`Suhu: ${temperature}°C`);
  console.log(`Terasa seperti: ${feelsLike}°C`);
  console.log(`Suhu minimum: ${tempMin}°C`);
  console.log(`Suhu maksimum: ${tempMax}°C`);
  console.log(`Tekanan udara: ${pressure} hPa`);
  console.log(`Kelembaban: ${humidity}%`);
  console.log(`Cuaca: ${weatherDescription}`);
  console.log(`Kecepatan angin: ${windSpeed} m/s`);
  console.log(`Arah angin: ${windDirection}°`);
  console.log(`Persentase awan: ${cloudiness}%`);
  