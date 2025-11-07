const express = require('express');
const router = express.Router();
const { findMax, includes, sum, missingNumbers } = require('../Talleres/taller-02'); 

router.post('/find-max', (req, res) => {
  const { lista } = req.body;
  if (!Array.isArray(lista)) return res.status(400).json({ error: 'Falta lista o no es un array' });
  const resultado = findMax(lista.map(Number));
  res.json({ resultado });
});

router.post('/includes', (req, res) => {
  const { lista, numero } = req.body;
  if (!Array.isArray(lista) || numero === undefined) return res.status(400).json({ error: 'Faltan lista o numero' });
  const resultado = includes(lista.map(Number), Number(numero));
  res.json({ resultado });
});

router.post('/sum', (req, res) => {
  const { lista } = req.body;
  if (!Array.isArray(lista)) return res.status(400).json({ error: 'Falta lista o no es un array' });
  const resultado = sum(lista.map(Number));
  res.json({ resultado });
});

router.post('/missing-numbers', (req, res) => {
  const { lista } = req.body;
  if (!Array.isArray(lista)) return res.status(400).json({ error: 'Falta lista o no es un array' });
  const resultado = missingNumbers(lista.map(Number));
  res.json({ resultado });
});

module.exports = router;
