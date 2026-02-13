import { floor } from "../Weather-Helper-Function/Helper";

type DataProps = {
  day: string;
  icon: string;
  temp: number;
  desc: string;
};

function Data({ day, icon, temp, desc }: DataProps) {
  return (
    <div className="w-fit border-2 border-white p-8 flex flex-col items-center rounded-xl font-raleway bg-gray-400">
      <h1>{day}</h1>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="icon" />
      <p className="text-2xl">{floor(temp)}</p>
      <p>{desc}</p>
    </div>
  );
}

export default Data;
