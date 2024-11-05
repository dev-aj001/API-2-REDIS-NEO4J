const neo4jDriver = require('../config/db');

module.exports = {

    // Q001 Obtener la lista de sucursales que tienen más de 5 empleados.
    query01: async (req, res) => {
        const query =
            'MATCH (s:Sucursal)<-[:TRABAJA_EN]-(e:Empleado) ' +
            'WITH s, COUNT(e) AS numEmpleados ' +
            'WHERE numEmpleados > 5 ' +
            'RETURN s';


        const session = neo4jDriver.session();

        try {
            const result = await session.run(query);
            const sucursales = result.records.map(record => record.get('s').properties);

            if (sucursales.length === 0) {
                res.data = { code: 404, message: "no se encontraron coincidencias" };
                return res.status(404).json(res.data);
            }

            res.data = sucursales;
            res.json({ sucursales });

        } catch (error) {
            console.log('Error while running query: ', error);
            res.status(500).json({ error: 'Error al ejecutar la consulta' });
        } finally {
            session.close();
        }
    },

    // Q002 Encontrar los gerentes que gestionan más de 3 proyectos simultáneamente.
    query02: async (req, res) => {
        const query =
            'MATCH (e:Gerente)<-[:GESTIONADO_POR]-(p:Proyecto) ' +
            'WITH e, COUNT(p) AS numProyectos ' +
            'WHERE numProyectos > $numProyectos RETURN e';

        const params = {
            numProyectos: 0,
        }
        const session = neo4jDriver.session();

        try {
            const result = await session.run(query, params);
            const gerentes = result.records.map(record => record.get('e').properties);

            if (gerentes.length === 0) {
                res.data = { code: 404, message: "no se encontraron coincidencias" };
                return res.status(404).json(res.data);
            }

            res.data = gerentes;
            res.json({ gerentes });

        } catch (error) {
            console.log('Error while running query: ', error);
            res.status(500).json({ error: 'Error al ejecutar la consulta' });
        } finally {
            session.close();
        }
    },

    // Q003 Obtener la lista de desarrolladores
    // con especialización en back-end que están trabajando en más de 2 proyectos.
    query03: async (req, res) => {
        const query =
            'MATCH (e:Desarrollador{especializacion:$especializacion})<-[:PROGRAMADO_POR]-(p:Proyecto) ' +
            'WITH e, COUNT(p) AS numProyectos ' +
            'WHERE numProyectos > $numProyectos ' +
            'RETURN e';

        const params = {
            especializacion: 'back-end', // default: 'back-end'
            numProyectos: 2, // default: 2
        }

        const session = neo4jDriver.session();
        try {
            const result = await session.run(query, params);
            const desarrolladores = result.records.map(record => record.get('e').properties);

            if (desarrolladores.length === 0) {
                res.data = { code: 404, message: "no se encontraron coincidencias" };
                return res.status(404).json(res.data);
            }

            res.data = desarrolladores;
            res.status(200).json({ desarrolladores });
        } catch (error) {
            console.log('Error while running query: ', error);
            res.status(500).json({ error: 'Error al ejecutar la consulta' });
        } finally {
            session.close();
        }
    },

    // Q004 Obtener la lista de proyectos que tienen un presupuesto mayor a $1,000,000.
    query04: async (req, res) => {
        const query =
            'MATCH (p:Proyecto) ' +
            'WITH p, p.presupuesto AS presupuesto ' +
            'WHERE presupuesto > $presupuesto ' +
            'RETURN p';

        const params = {
            presupuesto: 1000000, // default: 1000000
        }

        const session = neo4jDriver.session();

        try {
            const result = await session.run(query, params);

            const proyectos = result.records.map(record => record.get('p').properties);

            if (proyectos.length === 0) {
                res.data = { code: 404, message: "no se encontraron coincidencias" };
                return res.status(404).json(res.data);
            }

            res.data = proyectos;
            res.json({ proyectos });

        } catch (error) {
            console.log('Error while running query: ', error);
            res.status(500).json({ error: 'Error al ejecutar la consulta' });
        } finally {
            session.close();
        }
    },

    // Q005 Listar los empleados de soporte técnico de todas las sucursales.
    query05: async (req, res) => {
        const query =
            'MATCH (e:Soporte) ' +
            'RETURN e';

        const session = neo4jDriver.session();

        try {
            const result = await session.run(query);

            const soporte = result.records.map(record => record.get('e').properties);

            if (soporte.length === 0) {
                res.data = { code: 404, message: "no se encontraron coincidencias" };
                return res.status(404).json(res.data);
            }

            res.data = soporte;
            res.json({ soporte });

        } catch (error) {
            console.log('Error while running query: ', error);
            res.status(500).json({ error: 'Error al ejecutar la consulta' });
        } finally {
            session.close();
        }
    },

    // Q006 Encontrar los proyectos que corresponden a un cliente en específico.
    query06: async (req, res) => {
        const query =
            'MATCH (p:Proyecto)<-[:CONTRATA]-(c:Cliente{cid:$cliente}) ' +
            'RETURN p';

        const params = {
            cliente: req.params.id || ' ',
        }

        const session = neo4jDriver.session();

        try {
            const result = await session.run(query, params);

            const proyectos = result.records.map(record => record.get('p').properties);

            if (proyectos.length === 0) {
                res.data = { code: 404, message: "no se encontraron coincidencias" };
                return res.status(404).json(res.data);
            }

            res.data = proyectos;
            res.json({ proyectos });

        } catch (error) {
            console.log('Error while running query: ', error);
            res.status(500).json({ error: 'Error al ejecutar la consulta' });
        } finally {
            session.close();
        }
    },

    // Q011 Transferir todos los empleados de soporte técnico de una
    // sucursal en específico hacia otra sucursal.
    query11: async (req, res) => {
        const query =
        'MATCH (e:Soporte)-[r:TRABAJA_EN]->(sO:Sucursal {clave: $origen}) ' +
        'MATCH (sD:Sucursal {clave: $destino}) ' +
        'DELETE r ' +
        'CREATE (e)-[:TRABAJA_EN]->(sD)';

        const params = {
            origen: req.body.sucursal_origen || ' ',
            destino: req.body.sucursal_destino || ' ',
        }

        const session = neo4jDriver.session();

        try {
            const result = await session.run(query, params);

            const response = {
                relaciones_actualizadas : result.summary.updateStatistics._stats.relationshipsCreated,
                actualizacion_realizada : result.summary.updateStatistics._containsUpdates || false,
            }

            if (!response.actualizacion_realizada) {
                res.data = { code: 200, message: "la actualizacion no genero cambios, verifica los datos" };
                return res.status(200).json(res.data);
            }

            res.data = response;
            res.json(response);

        } catch (error) {
            console.log('Error while running query: ', error);
            res.status(500).json({ error: 'Error al ejecutar la consulta' });
        } finally {
            session.close();
        }
    },

    // Q012 Reemplaza al gerente de una sucursal en específico.
    query12: async (req, res) => {
        const query =
        'MATCH (e1:Gerente)-[r1:TRABAJA_EN]->(s1:Sucursal {clave: $origen}) ' +
        'MATCH (e2:Gerente)-[r2:TRABAJA_EN]->(s2:Sucursal {clave: $destino}) ' +
        'DELETE r1 ' +
        'DELETE r2 ' +
        'CREATE (e1)-[:TRABAJA_EN]->(s2) ' +
        'CREATE (e2)-[:TRABAJA_EN]->(s1)';

        const params = {
            origen: req.body.sucursal_origen || ' ',
            destino: req.body.sucursal_destino || ' ',
        }

        const session = neo4jDriver.session();

        try {
            const result = await session.run(query, params);

            const response = {
                relaciones_actualizadas : result.summary.updateStatistics._stats.relationshipsCreated,
                actualizacion_realizada : result.summary.updateStatistics._containsUpdates || false,
            }

            if (!response.actualizacion_realizada) {
                res.data = { code: 200, message: "la actualizacion no genero cambios, verifica los datos" };
                return res.status(200).json(res.data);
            }

            res.data = response;
            res.json(response);

        } catch (error) {
            console.log('Error while running query: ', error);
            res.status(500).json({ error: 'Error al ejecutar la consulta' });
        } finally {
            session.close();
        }
    },

    // Q013 Cambie un proyecto en específico a otra sucursal.
    query13: async (req, res) => {
        const query =
        'MATCH (p:Proyecto {pid: $proyecto})-[r:DESARROLLADO_POR]->(sAntigua:Sucursal) ' +
        'MATCH (sNueva:Sucursal {clave: $destino}) ' +
        'DELETE r ' +
        'CREATE (p)-[:DESARROLLADO_POR]->(sNueva)';

        console.log('q3');

        const params = {
            proyecto: req.body.proyecto_id || ' ',
            destino: req.body.sucursal_destino || ' ',
        }

        const session = neo4jDriver.session();

        try {
            const result = await session.run(query, params);

            console.log('Q3: ' + result.summary.query);

            const response = {
                relaciones_actualizadas : result.summary.updateStatistics._stats.relationshipsCreated,
                actualizacion_realizada : result.summary.updateStatistics._containsUpdates || false,
            }

            if (!response.actualizacion_realizada) {
                res.data = { code: 200, message: "la actualizacion no genero cambios, verifica los datos" };
                return res.status(200).json(res.data);
            }

            res.data = response;
            res.json(response);

        } catch (error) {
            console.log('Error while running query: ', error);
            res.status(500).json({ error: 'Error al ejecutar la consulta' });
        } finally {
            session.close();
        }
    },

    // Q014 Crear una visiata de un cliente con una sucursal especifica
    query14: async (req, res) => {
        const query =
        'MATCH (c:Cliente {cid:$cliente}) ' +
        'MATCH (s:Sucursal {clave:$sucursal}) ' +
        'CREATE (c)-[:VISITA {fecha: $fecha, hora: $hora, motivo: $motivo}]->(s)';

        const params = {
            cliente: req.body.cliente_id || ' ',
            sucursal: req.body.sucursal_id || ' ',
            fecha: req.body.fecha || ' ',
            hora: req.body.hora || ' ',
            motivo: req.body.motivo || ' ',
        }

        const session = neo4jDriver.session();

        try {
            const result = await session.run(query, params);

            const response = {
                relaciones_actualizadas : result.summary.updateStatistics._stats.relationshipsCreated,
                actualizacion_realizada : result.summary.updateStatistics._containsUpdates || false,
            }

            if (!response.actualizacion_realizada) {
                res.data = { code: 200, message: "la actualizacion no genero cambios, verifica los datos" };
                return res.status(200).json(res.data);
            }

            res.data = response;
            res.json(response);

        } catch (error) {
            console.log('Error while running query: ', error);
            res.status(500).json({ error: 'Error al ejecutar la consulta' });
        } finally {
            session.close();
        }
    },

    // Q015 Todos los empleados de una sucursal determinada son transferidos
    // a otra sucursal por cierre de sucursal de origen.
    query15: async (req, res) => {
        const query =
        'MATCH (sucursalOrigen:Sucursal {clave: $origen})<-[rel:TRABAJA_EN]-(empleado:Empleado) ' +
        'MATCH (sucursalDestino:Sucursal {clave: $destino}) ' +
        'DELETE rel ' +
        'CREATE (empleado)-[:TRABAJA_EN]->(sucursalDestino)';

        const params = {
            origen: req.body.sucursal_origen || ' ',
            destino: req.body.sucursal_destino || ' ',
        }

        const session = neo4jDriver.session();

        try {
            const result = await session.run(query, params);

            const response = {
                relaciones_actualizadas : result.summary.updateStatistics._stats.relationshipsCreated,
                actualizacion_realizada : result.summary.updateStatistics._containsUpdates || false,
            }

            if (!response.actualizacion_realizada) {
                res.data = { code: 200, message: "la actualizacion no genero cambios, verifica los datos" };
                return res.status(200).json(res.data);
            }

            res.data = response;
            res.json(response);

        } catch (error) {
            console.log('Error while running query: ', error);
            res.status(500).json({ error: 'Error al ejecutar la consulta' });
        } finally {
            session.close();
        }
    },

    // Q016 Crear reunion con sus propiedades y asistentes.
    query16: async (req, res) => {
        const query =
        'MATCH (p:Proyecto {pid: $proyecto}) ' +
        'MATCH (sucursal:Sucursal)<-[:DESARROLLADO_POR]-(p) ' +
        'MATCH (cliente:Cliente)-[:CONTRATA]->(p) ' +
        'MATCH (empleado:Empleado)<-[:PROGRAMADO_POR|GESTIONADO_POR|SOPORTADO_POR]-(p) ' +
        'MERGE (reunion:Reunion {id: $reunion, fecha: $fecha, hora: $hora, descripcion: $descripcion}) ' +
        'MERGE (sucursal)-[:ORGANIZA]->(reunion) ' +
        'MERGE (empleado)-[:ASISTE_A]->(reunion) ' +
        'MERGE (cliente)-[:ASISTE_A]->(reunion)';

        const params = {
            reunion: req.body.reunion_id || ' ',
            proyecto: req.body.proyecto_id || ' ',
            fecha: req.body.fecha || ' ',
            hora: req.body.hora || ' ',
            descripcion: req.body.descripcion || ' ',
        }

        const session = neo4jDriver.session();

        try {
            const result = await session.run(query, params);

            const response = {
                relaciones_actualizadas : result.summary.updateStatistics._stats.relationshipsCreated,
                actualizacion_realizada : result.summary.updateStatistics._containsUpdates || false,
            }

            if (!response.actualizacion_realizada) {
                res.data = { code: 200, message: "la actualizacion no genero cambios, verifica los datos" };
                return res.status(200).json(res.data);
            }

            res.data = response;
            res.json(response);

        } catch (error) {
            console.log('Error while running query: ', error);
            res.status(500).json({ error: 'Error al ejecutar la consulta' });
        } finally {
            session.close();
        }
    },

}
