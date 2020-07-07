import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '5fa0f8dcf2809284f87a07f28c165530';

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    },
  });

  return data;
};

//   url('https://hdwallpaper20.com/wp-content/uploads/2017/07/wallpaper-wp4001752.jpg');
