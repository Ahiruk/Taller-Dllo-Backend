const express = require('express');
const router = express.Router();
const { desglosarString, twoSum, conversionRomana, descomposicion } = require('../Talleres/taller-03');

router.post('/desglosar-string', (req, res) => {
  const { texto, tipo } = req.body;
  if (!texto || !tipo) return res.status(400).json({ error: 'Faltan texto o tipo' });
  if (!["vocales", "consonantes"].includes(tipo)) return res.status(400).json({ error: 'tipo debe ser "vocales" o "consonantes"' });
  const resultado = desglosarString(texto, tipo);
  res.json({ resultado });
});

router.post('/two-sum', (req, res) => {
  const { lista, objetivo } = req.body;
  if (!Array.isArray(lista) || objetivo === undefined) return res.status(400).json({ error: 'Faltan lista o objetivo' });
  const resultado = twoSum(lista.map(Number), Number(objetivo));
  res.json({ resultado });
});

router.post('/conversion-romana', (req, res) => {
  const { romano } = req.body;
  if (!romano) return res.status(400).json({ error: 'Falta romano' });
  const resultado = conversionRomana(romano.toUpperCase());
  res.json({ resultado });
});


router.post('/descomposicion', (req, res) => {
  const { cadena } = req.body;
  if (!cadena) return res.status(400).json({ error: 'Falta cadena' });
  const resultado = descomposicion(cadena);
  res.json({ resultado });
});

module.exports = router;
