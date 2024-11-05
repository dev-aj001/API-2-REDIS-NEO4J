const express = require('express');
const router = express.Router();
const queriesController = require('../controllers/queryController');

// Listado de rutas según las consultas
router.put('/empleados/soporte/transferencia', queriesController.query11); // Q11
router.put('/sucursales/cambio-gerente', queriesController.query12); // Q12
router.put('/proyectos/cambio-sucursal', queriesController.query13); // Q13
router.post('/clientes/visitas', queriesController.query14); // Q14
router.put('/sucursales/transferencia', queriesController.query15); // Q15
router.post('/sucursales/reunion', queriesController.query16); // Q15

module.exports = router;
