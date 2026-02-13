type CurrentForecastProps = {
  flip: string;
  description: string;
  icon: string;
  city: string;
  temp: string;
  humidity: string;
  windspeed: string;
  feelsLike: string;
};

const CurrentForecast = ({
  flip,
  description,
  icon,
  city,
  temp,
  humidity,
  windspeed,
  feelsLike,
}: CurrentForecastProps) => {
  return (
    <section className="flex justify-center items-center">
      <div
        className={`border-2 border-white flex justify-center items-center gap-4 p-2 rounded-xl max-md:flex-col ${flip}`}
      >
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="capitalize">{description}</p>
          <img
            src={`http://openweathermap.org/img/w/${icon}.png`}
            alt=""
            className=""
          />
          <h1 className="text-4xl font-bold">{city}</h1>
        </div>
        <p className="self-center text-7xl">{temp}</p>
        <div className="bg-gray-400 opacity-90 p-2 rounded-xl">
          <p>Humidity: {humidity}</p>
          <p>Wind: {windspeed}</p>
          <p>Feels Like: {feelsLike}</p>
        </div>
      </div>
    </section>
  );
};

export default CurrentForecast;
