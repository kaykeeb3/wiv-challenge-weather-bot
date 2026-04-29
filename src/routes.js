import express from 'express';
import * as weatherController from './controllers/weatherController.js';

const router = express.Router();

router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'LUMINA FEST API',
  });
});


router.get('/weather', weatherController.getWeather);

export default router;
