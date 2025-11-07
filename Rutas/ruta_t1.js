const express = require('express');
const router = express.Router();
const {convertidorTemp, resolvedor, mejorParidad, peorParidad} = require('../Talleres/taller1');

router.post('/convertidor', (req, res) => {
  const { temperatura } = req.body;
  if (temperatura === undefined) return res.status(400).json({ error: 'Falta temperatura' });
  const resultado = convertidorTemp(Number(temperatura));
  res.json({ resultado });
});

 router.post('/resolver', (req, res) => {
  const { a, b, c, signo } = req.body;
  if ([a, b, c].some(x => x === undefined)) return res.status(400).json({ error: 'Faltan parámetros a, b o c' });
  const resultado = resolvedor(Number(a), Number(b), Number(c), Boolean(signo));
  if (resultado === null) return res.json({ mensaje: 'Sin raíces reales' });
  res.json({ resultado });
});

router.post('/mejor-paridad', (req, res) => {
  const { num } = req.body;
  if (num === undefined) return res.status(400).json({ error: 'Falta num' });
  res.json({ esPar: mejorParidad(Number(num)) });
});

router.post('/peor-paridad', (req, res) => {
  const { num } = req.body;
  if (num === undefined) return res.status(400).json({ error: 'Falta num' });
  const resultado = peorParidad(Number(num));
  if (resultado === null) return res.status(400).json({ error: 'Número fuera de rango' });
  res.json({ esPar: resultado });
});

module.exports = router;