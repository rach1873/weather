import { build } from "../Weather-Helper-Function/Helper";
import type { ThreeDayType } from "../Weather-Helper-Function/Helper";
import Data from "./Data";

type MultiForecastProps = {
  forecastArr: ThreeDayType[];
  arrNum: number;
};

const MultiForecast = ({ forecastArr, arrNum }: MultiForecastProps) => {
  const buildForecast = (arr: ThreeDayType[], num: number) => {
    const newArr = arr.splice(0, num);
    const days = build(num);

    return newArr.map((x, i) => {
      return (
        <Data
          key={i}
          day={days[i]}
          temp={x.main.temp}
          icon={x.weather[0].icon}
          desc={x.weather[0].main}
        />
      );
    });
  };
  return (
    <section className="flex justify-center">
      <div className="flex gap-2 max-md:flex-col max-md:hidden">
        {buildForecast(forecastArr, arrNum)}
      </div>
    </section>
  );
};

export default MultiForecast;
