export type ThreeDayType = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: { description: string; id: number; main: string; icon: string }[];
  clouds: { all: number };
  wind: { deg: number; gust: number; speed: number };
  visibility: number;
  pop: number;
  sys: { pod: string };
  dt_txt: string;
};

const getBackground = (icon: string) => {
  const arr = [
    {
      id: "01d",
      title: "clearskyday",
      image: "bg-[url(/src/weatherimages/clearskyday.png)]",
    },
    {
      id: "01n",
      title: "clearskynight",
      image: "bg-[url(/src/weatherimages/clearskynight.png)]",
    },
    {
      id: "02d",
      title: "cloudsday",
      image: "bg-[url(/src/weatherimages/cloudsday.png)]",
    },
    {
      id: "02n",
      title: "cloudsnight",
      image: "bg-[url(/src/weatherimages/cloudsnight.png)]",
    },
    {
      id: "03d",
      title: "cloudsday",
      image: "bg-[url(/src/weatherimages/cloudsday.png)]",
    },
    {
      id: "03n",
      title: "cloudsnight",
      image: "bg-[url(/src/weatherimages/cloudsnight.png)]",
    },
    {
      id: "04d",
      title: "cloudsday",
      image: "bg-[url(/src/weatherimages/cloudsday.png)]",
    },
    {
      id: "04n",
      title: "cloudsnight",
      image: "bg-[url(/src/weatherimages/cloudsnight.png)]",
    },
    {
      id: "09d",
      title: "rainday",
      image: "bg-[url(/src/weatherimages/rainday.png)]",
    },
    {
      id: "09n",
      title: "rainnight",
      image: "bg-[url(/src/weatherimages/rainnight.png)]",
    },
    {
      id: "10d",
      title: "rainday",
      image: "bg-[url(/src/weatherimages/rainday.png)]",
    },
    {
      id: "10n",
      title: "rainnight",
      image: "bg-[url(/src/weatherimages/rainnight.png)]",
    },
    {
      id: "11d",
      title: "thunderstormday",
      image: "bg-[url(/src/weatherimages/thunderstormday.png)]",
    },
    {
      id: "11n",
      title: "thunderstormnight",
      image: "bg-[url(/src/weatherimages/thunderstormnight.png)]",
    },
    {
      id: "13d",
      title: "snowday",
      image: "bg-[url(/src/weatherimages/snowday.png)]",
    },
    {
      id: "13n",
      title: "snownight",
      image: "bg-[url(/src/weatherimages/snownight.png)]",
    },
    {
      id: "50d",
      title: "mistday",
      image: "bg-[url(/src/weatherimages/mistday.jpg)]",
    },
    {
      id: "50n",
      title: "mistnight",
      image: "bg-[url(/src/weatherimages/mistnight.jpg)]",
    },
  ];

  // return arr.find(x => x.id === icon).pic
  // return arr.map(x => x.id === icon ? x.pic : 'bg-blue-500')

  return arr.find((x) => x.id === icon)?.image;
};

const getDate = () => {
  const dte = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[dte.getMonth()];
  const currentDay = dte.getDate();
  const day = days[dte.getDay()];
  const year = dte.getFullYear();

  return day + ", " + month + " " + currentDay + ", " + year;
};

const floor = (num: number) => {
  return Math.floor(num) + "°";
};

// const getDay = (num) => {
//     let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     return
// }

const getWeekDay = (dte: number) => {
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return dayNames[new Date(dte * 1000).getDay()];
};

function build(endNum: number) {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let start = new Date().getDay() + 1;

  endNum = start + endNum;

  return dayNames.slice(start, endNum);
}

export { getBackground, getDate, floor, getWeekDay, build };
