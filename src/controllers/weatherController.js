import * as weatherService from '../services/weatherService.js';

export const getWeather = async (req, res) => {
  try {
    const weather = await weatherService.fetchWeather();

    return res.status(200).json({
      cidade: weather.cidade,
      data: weather.data,
      temperatura: weather.temperatura,
      descricao: weather.descricao,
      clima: weather.clima
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      error: error.message || 'Erro interno do servidor.'
    });
  }
};
