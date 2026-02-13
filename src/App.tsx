import { useState } from "react";
import axios from "axios";
import { getBackground, floor } from "./Weather-Helper-Function/Helper";
import "./App.css";
import Form from "./components/Form";
import CurrentForecast from "./components/CurrentForecast";
import Days from "./components/Days";
import MultiForecast from "./components/MultiForecast";

function App() {
  const apikey = import.meta.env.VITE_REACT_APP_API_KEY;

  const [click, updateClick] = useState(0);
  const [val, updateVal] = useState("");
  const [num, updateNum] = useState(0);
  const [problem, updateProblem] = useState(false);
  const [weatherdata, updateWeatherData] = useState({
    feelsLike: "",
    humidity: "",
    temp: "",
    description: "",
    icon: "",
    main: "",
    windspeed: "",
    city: "",
    threeDay: [],
    dt: "",
  });

  const reset = () => {
    updateVal("");
  };

  const flip = click === 0 || problem ? "hidden" : "block";

  const { feelsLike, humidity, temp, description, icon, windspeed, city } =
    weatherdata;

  const getData = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${apikey}&units=imperial`,
      );

      const { feels_like, humidity, temp } = res.data.main;
      const { description, icon, main } = res.data.weather[0];
      const { speed } = res.data.wind;
      const city = res.data.name;

      updateWeatherData({
        ...weatherdata,
        feelsLike: feels_like,
        humidity: humidity,
        temp: floor(temp),
        description: description,
        icon: icon,
        main: main,
        windspeed: speed,
        city: city,
      });

      updateProblem(false);

      updateClick(click + 1);
    } catch (err) {
      updateProblem(true);
      alert("City not found!!!");
    }

    reset();
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    updateNum(Number(e.currentTarget.id));
    getForecast();
  };

  const getForecast = async () => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=imperial`,
      )
      .then((res) => {
        updateWeatherData({ ...weatherdata, threeDay: res.data.list });
      });
  };

  const getIcon = icon ? getBackground(icon) : "bg-blue-400";
  const textColor = [
    "01n",
    "02n",
    "03n",
    "04n",
    "09n",
    "10n",
    "11n",
    "13n",
    "50n",
  ].includes(icon)
    ? "text-white"
    : "text-orange-500";

  return (
    <main
      className={`min-h-screen ${getIcon} ${textColor} bg-cover bg-no-repeat bg-center grid grid-cols-1`}
    >
      <Form
        getData={getData}
        val={val}
        updateVal={(e) => updateVal(e.target.value)}
      />

      <Days flip={flip} handleClick={handleClick} />
      <CurrentForecast
        city={city}
        description={description}
        flip={flip}
        humidity={humidity}
        icon={icon}
        temp={temp}
        feelsLike={feelsLike}
        windspeed={windspeed}
      />
      <MultiForecast forecastArr={weatherdata.threeDay} arrNum={num} />
    </main>
  );
}

export default App;
