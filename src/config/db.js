/** 
 * Archivo de configuración y conexión a la base de datos de Neo4j.
 * **/

const neo4j = require("neo4j-driver");

const neo4jDriver = neo4j.driver(
    'neo4j://neo4j:7687',
    neo4j.auth.basic('neo4j', 'neo4j')
);

module.exports = neo4jDriver;