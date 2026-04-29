import axios from 'axios';

const getFormattedDate = () => {
  return new Date().toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long'
  });
};

export const fetchWeather = async () => {
  const apiKey = process.env.WEATHER_API_KEY;
  const city = process.env.CITY_NAME || 'Aurora';

  if (!apiKey) {
    throw { status: 500, message: 'WEATHER_API_KEY não configurada.' };
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

  try {
    const { data } = await axios.get(url);

    const temp = Math.round(data.main.temp);
    const desc = data.weather[0].description;

    return {
      cidade: 'Aurora',
      data: getFormattedDate(),
      temperatura: `${temp}°C`,
      descricao: desc.charAt(0).toUpperCase() + desc.slice(1),
      clima: data.weather[0].main
    };
  } catch (error) {
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || 'Erro ao consultar serviço de clima.';
    throw { status, message };
  }
};
