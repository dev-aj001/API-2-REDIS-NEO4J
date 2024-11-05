const express = require('express');
const router = express.Router();
const queriesController = require('../controllers/queryController');

// Listado de rutas según las consultas

router.get('/sucursales', queriesController.query01); // Q01
router.get('/empleados/gerentes', queriesController.query02); // Q02
router.get('/empleados/desarrolladores', queriesController.query03); // Q03
router.get('/proyectos/costos-altos', queriesController.query04); // Q04
router.get('/empleados/soporte', queriesController.query05); // Q05
router.get('/proyectos/cliente/:id', queriesController.query06); // Q06
// router.get('/sucursales/visitas', queriesController.query07); // Q07
// router.get('/empleados/desarrolladores/presupuesto', queriesController.query08); // Q08
// router.get('/clientes/multiples-proyectos', queriesController.query09); // Q09
// router.get('/sucursales/desarrolladores/full-stack', queriesController.query10); // Q10

module.exports = router;
