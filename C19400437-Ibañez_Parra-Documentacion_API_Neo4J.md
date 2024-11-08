
# Proyecto: API REST con Redis y Neo4j

## 👦🏻 Autor:
Armando Jair Ibañez Parra 
C19400437

## 📑 Índice
1. [Introducción](#-introducción)
2. [Link al Repositorio](#-link-al-repositorio)
3. [Presentación del Caso](#-presentación-del-caso)
4. [Modelo de Datos](#-modelo-de-datos)
   - [Cypher para Crear Nodos y Relaciones](#-cypher-para-crear-nodos-y-relaciones)
5. [Consultas Requeridas](#-consultas-requeridas)
6. [Archivo de Colección de Consultas con Postman](#-archivo-de-colección-de-consultas-con-postman)
7. [Ejemplos de Consumo de la API](#-ejemplos-de-consumo-de-la-api)
   - [Ejemplo 1](#ejemplo-1-descripción-del-ejemplo)
   - [Ejemplo 2](#ejemplo-2-descripción-del-ejemplo)
8. [Estructura del Proyecto](#-estructura-del-proyecto)
9. [Código del Backend](#-código-del-backend)
10. [Docker Compose](#-docker-compose)

## 📋 Introducción
Este proyecto implementa una API REST utilizando contenedores de Redis y Neo4j para gestionar y consultar datos. La arquitectura aprovecha las capacidades de Redis para manejar datos rápidos y temporales como un caching y como logger de todas las peticiones realizadas, mientras que Neo4j se utiliza para gestionar el modelo de datos basado en grafos.

## 📂 Link al Repositorio
Puedes acceder al código fuente y archivos de configuración del proyecto en el siguiente enlace: [Repositorio del Proyecto](https://github.com/dev-aj001/API-2-REDIS-NEO4J).

## 📝 Presentación del Caso

### Gestión Empresarial
La empresa "TechSoft" desea gestionar sus empleados, proyectos y sucursales a nivel nacional. Se requiere un sistema para administrar las diferentes áreas de trabajo y operaciones de la empresa.

### Sucursales
- Cada sucursal tiene una clave, nombre, dirección, ciudad y capacidad (número máximo de empleados que puede albergar).
- Cada sucursal tiene empleados exclusivos; es decir, un empleado solo puede trabajar en una sucursal a la vez.

### Empleados
- Cada empleado tiene un ID único, nombre, CURP, teléfono, número de cuenta bancaria (donde se deposita el sueldo) y fecha de contratación.
- Hay tres tipos de empleados en cada sucursal:
- **Gerentes**: responsables de supervisar la operación. Se requiere saber el área que gestionan.
- **Desarrolladores**: Se requiere su especialización (back-end, front-end, full-stack), su lenguaje principal y el número de proyectos activos.
- **Soporte técnico**: Se requiere el tipo de soporte que brindan (infraestructura, software, hardware) y su número de contacto interno.

### Proyectos
- Los proyectos tienen un código, nombre, descripción, fecha de inicio, fecha de finalización y un presupuesto asignado.
- Cada proyecto es gestionado por un gerente y puede tener varios desarrolladores trabajando en él.
- Un proyecto es  desarrollado en una sucursal específica, pero puede involucrar a empleados de otras sucursales.

### Clientes
- Cada proyecto está asociado a un cliente, y se requiere su nombre, empresa, teléfono de contacto y correo electrónico.
- Un cliente puede contratar múltiples proyectos en diferentes sucursales.

### Reuniones y visitas
- Las sucursales tienen reuniones con clientes. Se debe registrar el cliente, la fecha, la hora y los asistentes de la reunión (empleados de la empresa).
- Se realizan visitas a las sucursales por parte de los clientes, registrando la fecha, hora, cliente, y motivo de la visita.

## 🗺️ Escenario de Datos
Archivo .cypher con los datos de los nodos y relaciones requeridos para el caso.
**Nota:** es necesario ejecutar todo el archivo por completo.

### 🔍 Cypher para Crear Nodos y Relaciones
```cypher
// Creacion de Sucursales
CREATE (s1:Sucursal {clave: 'S001', nombre: 'Sucursal Acaponeta', direccion: 'Calle A', ciudad: 'Acaponeta', capacidad: 8})
CREATE (s2:Sucursal {clave: 'S002', nombre: 'Sucursal Ixtlan', direccion: 'Calle B', ciudad: 'Ixtlan', capacidad: 5})
CREATE (s3:Sucursal {clave: 'S003', nombre: 'Sucursal San Blas', direccion: 'Calle C', ciudad: 'San Blas', capacidad: 10})
CREATE (s4:Sucursal {clave: 'S004', nombre: 'Sucursal Tepic', direccion: 'Calle D', ciudad: 'Tepic', capacidad: 20})


// Creacion de Empleados
CREATE (e1:Empleado {eid: 'E001', nombre: ' ALEJANDRO AARON', curp: 'CURP001', tel: '123456789', cuenta: '0001', fecha_contratacion: '2023-01-01'})
CREATE (e2:Empleado {eid: 'E002', nombre: 'EDSON ANTONIO', curp: 'CURP002', tel: '987654321', cuenta: '0002', fecha_contratacion: '2023-02-01'})
CREATE (e3:Empleado {eid: 'E003', nombre: 'JOSÉ LINO', curp: 'CURP003', tel: '456123789', cuenta: '0003', fecha_contratacion: '2023-02-01'})
CREATE (e4:Empleado {eid: 'E004', nombre: 'ISIDRO ANTONIO', curp: 'CURP004', tel: '789123456', cuenta: '0004', fecha_contratacion: '2023-02-01'})

CREATE (e5:Empleado {eid: 'E005', nombre: 'CESAR URIEL', curp: 'CURP005', tel: '987654321', cuenta: '0005', fecha_contratacion: '2023-02-01'})
CREATE (e6:Empleado {eid: 'E006', nombre: 'ARMANDO JAIR', curp: 'CURP006', tel: '258147369', cuenta: '0006', fecha_contratacion: '2023-02-01'})
CREATE (e7:Empleado {eid: 'E007', nombre: 'KARLA YAZMIN', curp: 'CURP007', tel: '852963741', cuenta: '0007', fecha_contratacion: '2023-02-01'})
CREATE (e8:Empleado {eid: 'E008', nombre: 'JOSE MANUEL', curp: 'CURP008', tel: '753869421', cuenta: '0008', fecha_contratacion: '2023-02-01'})

CREATE (e9:Empleado {eid: 'E009', nombre: 'ALAN DANIEL', curp: 'CURP009', tel: '123689547', cuenta: '0009', fecha_contratacion: '2023-02-01'})
CREATE (e10:Empleado {eid: 'E010', nombre: 'YAEL ALEJANDRO', curp: 'CURP010', tel: '789123564', cuenta: '0010', fecha_contratacion: '2023-02-01'})
CREATE (e11:Empleado {eid: 'E011', nombre: 'JAIME CAMIL', curp: 'CURP011', tel: '123457896', cuenta: '0011', fecha_contratacion: '2023-02-01'})
CREATE (e12:Empleado {eid: 'E012', nombre: 'JOSE ALBERTO', curp: 'CURP012', tel: '963147852', cuenta: '0012', fecha_contratacion: '2023-02-01'})
CREATE (e13:Empleado {eid: 'E013', nombre: 'EDGAR JOEL', curp: 'CURP012', tel: '741258963', cuenta: '0013', fecha_contratacion: '2023-02-01'})
CREATE (e14:Empleado {eid: 'E014', nombre: 'JORGE SAUL', curp: 'CURP012', tel: '963852741', cuenta: '0014', fecha_contratacion: '2023-02-01'})


CREATE (e15:Empleado {eid: 'E015', nombre: 'URIEL', curp: 'CURP015', tel: '987654321', cuenta: '0005', fecha_contratacion: '2023-02-01'})
CREATE (e16:Empleado {eid: 'E016', nombre: 'JAIR', curp: 'CURP016', tel: '258147369', cuenta: '0006', fecha_contratacion: '2023-02-01'})
CREATE (e17:Empleado {eid: 'E017', nombre: 'YAZMIN', curp: 'CURP017', tel: '852963741', cuenta: '0007', fecha_contratacion: '2023-02-01'})
CREATE (e18:Empleado {eid: 'E018', nombre: 'MANUEL', curp: 'CURP018', tel: '753869421', cuenta: '0008', fecha_contratacion: '2023-02-01'})

// Asignacion de Roles
// Sucursal 001
SET e1:Gerente
SET e2:Desarrollador, e2.especializacion = 'back-end', e2.lenguaje = 'Java'
SET e3:Desarrollador, e3.especializacion = 'front-end', e3.lenguaje = 'Python'
SET e4:Soporte

// Sucursal 002
SET e5:Gerente
SET e6:Desarrollador, e6.especializacion = 'back-end', e6.lenguaje = 'Java'
SET e7:Desarrollador, e7.especializacion = 'front-end', e7.lenguaje = 'Python'
SET e8:Soporte

// Sucursal 003
SET e9:Gerente
SET e10:Desarrollador, e10.especializacion = 'back-end', e10.lenguaje = 'Python'
SET e11:Desarrollador, e11.especializacion = 'front-end', e11.lenguaje = 'Java'
SET e12:Desarrollador, e12.especializacion = 'full-stack', e12.lenguaje = 'Java'
SET e13:Soporte
SET e14:Soporte

// Sucursal 004
SET e15:Gerente
SET e16:Desarrollador, e10.especializacion = 'back-end', e10.lenguaje = 'Python'
SET e17:Desarrollador, e11.especializacion = 'front-end', e11.lenguaje = 'Java'
SET e18:Soporte


// Creacion de Clientes
CREATE (c1:Cliente {cid: 'C001', nombre: 'Cliente A', empresa: 'Empresa A', tel: '555555555', correo: 'contacto@empresaA.com'})
CREATE (c2:Cliente {cid: 'C002', nombre: 'Cliente B', empresa: 'Empresa B', tel: '666666666', correo: 'contacto@empresaB.com'})
CREATE (c3:Cliente {cid: 'C003', nombre: 'Cliente C', empresa: 'Empresa C', tel: '777777777', correo: 'contacto@empresaC.com'})


// Creacion de Proyectos
CREATE (p1:Proyecto {pid: 'P001', nombre: 'Proyecto Alpha', desc: 'Desarrollo de sistema', fecha_inicio: '2024-01-01', fecha_final: '2024-12-31', presupuesto: 1200000})
CREATE (p2:Proyecto {pid: 'P002', nombre: 'Proyecto Beta', desc: 'Implementación de software', fecha_inicio: '2024-03-01', fecha_final: '2024-10-01', presupuesto: 500000})
CREATE (p3:Proyecto {pid: 'P003', nombre: 'Proyecto Gamma', desc: 'Implementación de software', fecha_inicio: '2024-04-01', fecha_final: '2024-11-01', presupuesto: 30000})
CREATE (p4:Proyecto {pid: 'P004', nombre: 'Proyecto Delta', desc: 'Implementación de software', fecha_inicio: '2024-05-01', fecha_final: '2024-12-01', presupuesto: 700000})

CREATE (p5:Proyecto {pid: 'P005', nombre: 'Proyecto 5', desc: 'Implementación de software', fecha_inicio: '2024-05-01', fecha_final: '2024-12-01', presupuesto: 1500000})
CREATE (p6:Proyecto {pid: 'P006', nombre: 'Proyecto 6', desc: 'Implementación de software', fecha_inicio: '2024-05-01', fecha_final: '2024-12-01', presupuesto: 700000})
CREATE (p7:Proyecto {pid: 'P007', nombre: 'Proyecto 7', desc: 'Implementación de software', fecha_inicio: '2024-05-01', fecha_final: '2024-12-01', presupuesto: 700000})
CREATE (p8:Proyecto {pid: 'P008', nombre: 'Proyecto 8', desc: 'Implementación de software', fecha_inicio: '2024-05-01', fecha_final: '2024-12-01', presupuesto: 700000})

// Creacion de Reuniones
CREATE (r1:Reunion {id: 'R001', fecha: '2024-10-27', hora: '15:00', descripcion: 'Revisión de proyecto'})
CREATE (r2:Reunion {id: 'R002', fecha: '2024-10-28', hora: '15:00', descripcion: 'Revisión de proyecto'})
CREATE (r3:Reunion {id: 'R003', fecha: '2024-10-29', hora: '15:00', descripcion: 'Revisión de proyecto'})


// Relacion Empleado-Sucursal [:TRABAJA_EN]
// Sucursal 001
CREATE (e1)-[:TRABAJA_EN]->(s1)
CREATE (e2)-[:TRABAJA_EN]->(s1)
CREATE (e3)-[:TRABAJA_EN]->(s1)
CREATE (e4)-[:TRABAJA_EN]->(s1)

// Sucursal 002
CREATE (e5)-[:TRABAJA_EN]->(s2)
CREATE (e6)-[:TRABAJA_EN]->(s2)
CREATE (e7)-[:TRABAJA_EN]->(s2)
CREATE (e8)-[:TRABAJA_EN]->(s2)


// Sucursal 003
CREATE (e9)-[:TRABAJA_EN]->(s3)
CREATE (e10)-[:TRABAJA_EN]->(s3)
CREATE (e11)-[:TRABAJA_EN]->(s3)
CREATE (e12)-[:TRABAJA_EN]->(s3)
CREATE (e13)-[:TRABAJA_EN]->(s3)
CREATE (e14)-[:TRABAJA_EN]->(s3)

// Sucursal 004
CREATE (e15)-[:TRABAJA_EN]->(s2)
CREATE (e16)-[:TRABAJA_EN]->(s2)
CREATE (e17)-[:TRABAJA_EN]->(s2)
CREATE (e18)-[:TRABAJA_EN]->(s2)


// Relacion Gerente-Proyecto [:GESTIONADO_POR]
CREATE (p1)-[:GESTIONADO_POR]->(e1)
CREATE (p2)-[:GESTIONADO_POR]->(e5)
CREATE (p3)-[:GESTIONADO_POR]->(e9)

CREATE (p5)-[:GESTIONADO_POR]->(e15)
CREATE (p6)-[:GESTIONADO_POR]->(e15)
CREATE (p7)-[:GESTIONADO_POR]->(e15)
CREATE (p8)-[:GESTIONADO_POR]->(e15)


// Relacion Desarrollador-Proyecto [:PROGRAMADO_POR]
CREATE (p1)-[:PROGRAMADO_POR]->(e2)
CREATE (p1)-[:PROGRAMADO_POR]->(e3)

CREATE (p2)-[:PROGRAMADO_POR]->(e6)
CREATE (p2)-[:PROGRAMADO_POR]->(e7)

CREATE (p3)-[:PROGRAMADO_POR]->(e10)
CREATE (p3)-[:PROGRAMADO_POR]->(e11)
CREATE (p3)-[:PROGRAMADO_POR]->(e12)

CREATE (p8)-[:PROGRAMADO_POR]->(e2)
CREATE (p7)-[:PROGRAMADO_POR]->(e2)
CREATE (p6)-[:PROGRAMADO_POR]->(e2)



// Relacion Soporte-Proyecto [:SOPORTADO_POR]
CREATE (p1)-[:SOPORTADO_POR]->(e4)
CREATE (p2)-[:SOPORTADO_POR]->(e8)
CREATE (p3)-[:SOPORTADO_POR]->(e13)
CREATE (p3)-[:SOPORTADO_POR]->(e14)


// Relacion Sucursal-Proyecto [:DESARROLLADO_POR]
CREATE (p1)-[:DESARROLLADO_POR]->(s1)
CREATE (p2)-[:DESARROLLADO_POR]->(s2)
CREATE (p3)-[:DESARROLLADO_POR]->(s3)


// Relacion Cliente-Proyecto [:CONTRATA]
CREATE (c1)-[:CONTRATA]->(p1)
CREATE (c2)-[:CONTRATA]->(p2)
CREATE (c2)-[:CONTRATA]->(p3)


// Relacion Cliente-Sucursal [:VISITA {fecha: '2024-04-01', hora: '13:20', motivo: 'Inspección'}}]
CREATE (c1)-[:VISITA {fecha: '2024-04-01', hora: '13:20', motivo: 'Inspección'}]->(s1)
CREATE (c2)-[:VISITA {fecha: '2024-04-01', hora: '13:20', motivo: 'Inspección'}]->(s2)
CREATE (c2)-[:VISITA {fecha: '2024-04-02', hora: '13:20', motivo: 'Inspección'}]->(s3)
CREATE (c3)-[:VISITA {fecha: '2024-04-03', hora: '13:20', motivo: 'Inspección'}]->(s3)
CREATE (c3)-[:VISITA {fecha: '2024-04-04', hora: '13:20', motivo: 'Inspección'}]->(s3)
CREATE (c3)-[:VISITA {fecha: '2024-04-05', hora: '13:20', motivo: 'Inspección'}]->(s3)


// Relacion Sucursal-Reunion [:ORGANIZA]
CREATE (s1)-[:ORGANIZA]->(r1)
CREATE (s2)-[:ORGANIZA]->(r2)
CREATE (s3)-[:ORGANIZA]->(r3)

// Relacion Cliente-Empleado-Reunion [:ASISTE]
CREATE (c1)-[:ASISTE]->(r1)
CREATE (e1)-[:ASISTE]->(r1)
CREATE (e2)-[:ASISTE]->(r1)
CREATE (e3)-[:ASISTE]->(r1)
CREATE (e4)-[:ASISTE]->(r1)

CREATE (c2)-[:ASISTE]->(r2)
CREATE (e5)-[:ASISTE]->(r2)
CREATE (e6)-[:ASISTE]->(r2)
CREATE (e7)-[:ASISTE]->(r2)
CREATE (e8)-[:ASISTE]->(r2)

```

## 🔍 Consultas Requeridas
A continuación, se listan las queries necesarias para resolver el caso presentado:

1. **Consulta 1:** `Obtener la lista de sucursales que tienen más de 5 empleados.`
    ```cypher
    MATCH (s:Sucursal)<-[:TRABAJA_EN]-(e:Empleado)
    WITH s, COUNT(e) AS numEmpleados
    WHERE numEmpleados > 5
    RETURN s.nombre AS NombreSucursal, numEmpleados
    ```

2. **Consulta 2:** `Encontrar los gerentes que gestionan más de 3 proyectos simultáneamente.`
    ```cypher
MATCH (e:Gerente)<-[:GESTIONADO_POR]-(p:Proyecto)
WITH e, COUNT(p) AS numProyectos
WHERE numProyectos > 3
RETURN e
    ```

3. **Consulta 3:** `Obtener la lista de desarrolladores con especialización en back-end que están trabajando en más de 2 proyectos.`
    ```cypher
MATCH (e:Desarrollador{especializacion: 'back-end'})<-[:PROGRAMADO_POR]-(p:Proyecto)
WITH e, COUNT(p) AS numProyectos
WHERE numProyectos > 2
RETURN e
    ```

4. **Consulta 1:** `Obtener la lista de proyectos que tienen un presupuesto mayor a $1,000,000.`
    ```cypher
MATCH (p:Proyecto)
WITH p, p.presupuesto AS presupuesto
WHERE presupuesto > 1000000
RETURN p
    ```

5. **Consulta 2:** `Listar los empleados de soporte técnico de todas las sucursales`
    ```cypher
MATCH (e:Soporte)
RETURN e
    ```

6. **Consulta 3:** `Encontrar los proyectos que corresponden a un cliente en específico.`
    ```cypher
MATCH (p:Proyecto)<-[:CONTRATA]-(c:Cliente{cid: 'C002'})
RETURN p
    ```

7. **Consulta 1:** `Obtener la lista de sucursales que han recibido visitas de más de 5 clientes diferentes.`
    ```cypher
MATCH (c:Cliente)-[:VISITA]->(s:Sucursal)
WITH s, COUNT(DISTINCT c) AS numClientes
WHERE numClientes > 1
RETURN s
    ```

8. **Consulta 2:** `Encontrar a los desarrolladores que han trabajado en proyectos con un presupuesto total mayor a $500,000.`
    ```cypher
MATCH (p:Proyecto)-[:PROGRAMADO_POR]->(e:Desarrollador)
WITH e, p.presupuesto AS presupuesto
WHERE presupuesto > 1000000
RETURN e
    ```

9. **Consulta 3:** `Obtener la lista de clientes que han contratado más de 3 proyectos en diferentes sucursales.`
    ```cypher
MATCH (p:Proyecto)<-[:CONTRATA]-(c:Cliente)
WITH c, COUNT(p) AS nunmProyectos
WHERE nunmProyectos > 1
RETURN c
    ```

10. **Consulta 1:** `Encontrar las sucursales que tienen más de 5 desarrolladores especializados en full-stack.`
    ```cypher
MATCH (e:Desarrollador{especializacion: 'full-satck'})-[:TRABAJA_EN]->(s:Sucursal)
WITH e, COUNT(e) AS nunmEmpleados
WHERE nunmEmpleados > 0
RETURN e
    ```

11. **Consulta 2:** `Transferir todos los empleados de soporte técnico de una sucursal en específico hacia otra sucursal.`
    ```cypher
MATCH (e:Soporte)-[r:TRABAJA_EN]->(s:Sucursal {clave: 'S002'})
DELETE r
CREATE (e)-[:TRABAJA_EN]->(s3)
    ```

12. **Consulta 3:** `Reemplaza al gerente de una sucursal en específico.`
    ```cypher
MATCH (e1:Gerente)-[r1:TRABAJA_EN]->(s1:Sucursal {clave: 'S001'})
DELETE r1

MATCH (e2:Gerente)-[r2:TRABAJA_EN]->(s2:Sucursal {clave: 'S002'})
DELETE r2

CREATE (e1)-[:TRABAJA_EN]->(s2)
CREATE (e2)-[:TRABAJA_EN]->(s1)
    ```

13. **Consulta 1:** ` Cambie un proyecto en específico a otra sucursal, incluyendo la totalidad de participantes en el proyecto.`
    ```cypher
MATCH (p:Proyecto)-[r:GESTIONADO_POR]->(s:Sucursal {clave: 'S001'})
DELETE r

CREATE (p)-[:DESARROLLADO_POR]->(s:Sucursal {clave: 'S002'})
    ```

14. **Consulta 2:** `Obtener la lista de clientes que nunca han realizado visitas a las sucursales.`
    ```cypher
MATCH (c:Cliente)
WHERE NOT EXISTS ((c)-[:VISITA]->(:Sucursal))
RETURN c.nombre AS NombreCliente, c.id AS IDCliente
    ```

15. **Consulta 3:** `Todos los empleados de una sucursal determinada son transferidos a otra sucursal por cierre de sucursal de origen.`
    ```cypher
MATCH (sucursalOrigen:Sucursal {clave: 'S001'})<-[rel:TRABAJA_EN]-(empleado:Empleado)
MATCH (sucursalDestino:Sucursal {clave: 'S002'})

DELETE rel

CREATE (empleado)-[:TRABAJA_EN]->(sucursalDestino)
    ```


## 📦 Archivo de Colección de Consultas con Postman
El archivo de colección de consultas para Postman está incluido en el repositorio. Puedes importarlo directamente desde: [coleccion-postman.json](https://github.com/dev-aj001/API-2-REDIS-NEO4J/blob/main/ColeccionPostman.json).

## 🌐 Ejemplos de Consumo de la API
Aquí se muestran ejemplos de consumo de la API para cada una de las consultas disponibles.

### PETICIONES QUE NO MODIFICAN EL GRAFO

### Q001
**Request:**
```http
GET http://localhost:3000/api/sucursales
```

**Response:**
```json
{
  "sucursales": [
    {
      "clave": "S002",
      "ciudad": "Ixtlan",
      "direccion": "Calle B",
      "nombre": "Sucursal Ixtlan",
      "capacidad": {
        "low": 5,
        "high": 0
      }
    },
    {
      "clave": "S003",
      "ciudad": "San Blas",
      "direccion": "Calle C",
      "nombre": "Sucursal San Blas",
      "capacidad": {
        "low": 10,
        "high": 0
      }
    }
  ]
}
```

### Q002
**Request:**
```http
GET http://localhost:3000/api/empleados/gerentes
```

**Response:**
```json
{
  "gerentes": [
    {
      "eid": "E001",
      "fecha_contratacion": "2023-01-01",
      "cuenta": "0001",
      "tel": "123456789",
      "nombre": " ALEJANDRO AARON",
      "curp": "CURP001"
    },
    {
      "eid": "E005",
      "fecha_contratacion": "2023-02-01",
      "cuenta": "0005",
      "tel": "987654321",
      "nombre": "CESAR URIEL",
      "curp": "CURP005"
    },
    {
      "eid": "E009",
      "fecha_contratacion": "2023-02-01",
      "cuenta": "0009",
      "tel": "123689547",
      "nombre": "ALAN DANIEL",
      "curp": "CURP009"
    },
    {
      "eid": "E015",
      "fecha_contratacion": "2023-02-01",
      "cuenta": "0005",
      "tel": "987654321",
      "nombre": "URIEL",
      "curp": "CURP015"
    }
  ]
}
```

### Q003
**Request:**
```http
GET http://localhost:3000/api/empleados/desarrolladores
```

**Response:**
```json
{
  "desarrolladores": [
    {
      "eid": "E002",
      "lenguaje": "Java",
      "fecha_contratacion": "2023-02-01",
      "cuenta": "0002",
      "tel": "987654321",
      "especializacion": "back-end",
      "nombre": "EDSON ANTONIO",
      "curp": "CURP002"
    }
  ]
}
```

### Q004
**Request:**
```http
GET http://localhost:3000/api/proyectos/costos-altos
```

**Response:**
```json
{
  "proyectos": [
    {
      "presupuesto": {
        "low": 1200000,
        "high": 0
      },
      "fecha_inicio": "2024-01-01",
      "fecha_final": "2024-12-31",
      "pid": "P001",
      "nombre": "Proyecto Alpha",
      "desc": "Desarrollo de sistema"
    },
    {
      "presupuesto": {
        "low": 1500000,
        "high": 0
      },
      "fecha_inicio": "2024-05-01",
      "fecha_final": "2024-12-01",
      "pid": "P005",
      "nombre": "Proyecto 5",
      "desc": "Implementación de software"
    }
  ]
}
```

### Q005
**Request:**
```http
GET http://localhost:3000/api/empleados/soporte
```

**Response:**
```json
{
  "soporte": [
    {
      "eid": "E004",
      "fecha_contratacion": "2023-02-01",
      "cuenta": "0004",
      "tel": "789123456",
      "nombre": "ISIDRO ANTONIO",
      "curp": "CURP004"
    },
    {
      "eid": "E008",
      "fecha_contratacion": "2023-02-01",
      "cuenta": "0008",
      "tel": "753869421",
      "nombre": "JOSE MANUEL",
      "curp": "CURP008"
    },
    {
      "eid": "E013",
      "fecha_contratacion": "2023-02-01",
      "cuenta": "0013",
      "tel": "741258963",
      "nombre": "EDGAR JOEL",
      "curp": "CURP012"
    },
    {
      "eid": "E014",
      "fecha_contratacion": "2023-02-01",
      "cuenta": "0014",
      "tel": "963852741",
      "nombre": "JORGE SAUL",
      "curp": "CURP012"
    },
    {
      "eid": "E018",
      "fecha_contratacion": "2023-02-01",
      "cuenta": "0008",
      "tel": "753869421",
      "nombre": "MANUEL",
      "curp": "CURP018"
    }
  ]
}
```

### Q006
**Request:**
```http
GET http://localhost:3000/api/proyectos/cliente/C002
```

**parametros:** cliente/*:idCliente*

**Response:**
```json
{
  "proyectos": [
    {
      "presupuesto": {
        "low": 500000,
        "high": 0
      },
      "fecha_inicio": "2024-03-01",
      "fecha_final": "2024-10-01",
      "pid": "P002",
      "nombre": "Proyecto Beta",
      "desc": "Implementación de software"
    },
    {
      "presupuesto": {
        "low": 30000,
        "high": 0
      },
      "fecha_inicio": "2024-04-01",
      "fecha_final": "2024-11-01",
      "pid": "P003",
      "nombre": "Proyecto Gamma",
      "desc": "Implementación de software"
    }
  ]
}
```

### PETICIONES QUE MODIFICAN EL GRAFO

### Q11. `Transferir todos los empleados de soporte técnico de una sucursal en específico hacia otra sucursal.`
**Request:**
```http
PUT http://localhost:3000/api/empleados/soporte/transferencia
```

**Body:**
```json
{
    "sucursal_origen" : "S001",
    "sucursal_destino" : "S004"
}
```

**Response:**
```json
{
    "relaciones_actualizadas": 1,
    "actualizacion_realizada": true
}
```

### Q12. `Reemplaza al gerente de una sucursal en específico.`
**Request:**
```http
PUT http://localhost:3000/api/sucursales/cambio-gerente
```

**Body:**
```json
{
    "sucursal_origen" : "S002",
    "sucursal_destino" : "S003"
}
```

**Response:**
```json
{
    "relaciones_actualizadas": 4,
    "actualizacion_realizada": true
}
```

### Q13. `Cambie un proyecto en específico a otra sucursal, incluyendo la totalidad de participantes en el proyecto.`
**Request:**
```http
PUT http://localhost:3000/api/proyectos/cambio-sucursal
```

**Body:**
```json
{
    "proyecto_id": "P002",
    "sucursal_destino": "S004"
}
```

**Response:**
```json
{
    "relaciones_actualizadas": 1,
    "actualizacion_realizada": true
}
```

### Q15. `Todos los empleados de una sucursal determinada son transferidos a otra sucursal por cierre de sucursal de origen.`
**Request:**
```http
PUT http://localhost:3000/api/proyectos/cambio-sucursal
```

**Body:**
```json
{
    "sucursal_origen": "S004",
    "sucursal_destino": "S001"
}
```

**Response:**
```json
{
    "relaciones_actualizadas": 1,
    "actualizacion_realizada": true
}
```

### QI1. `Crear una visiata de un cliente con una sucursal especifica.`
**Request:**
```http
POST http://localhost:3000/api/clientes/visitas
```

**Body:**
```json
{
    "cliente_id":"C001", // Asignar nueva id manual cada consulta
    "sucursal_id":"S001",
    "fecha":"2024-11-04", // Formato YYYY-MM-DD
    "hora":"07:58", 
    "motivo":"Revision de proyecto" // Motivo de visita del cliente
}
```

**Response:**
```json
{
    "relaciones_actualizadas": 1,
    "actualizacion_realizada": true
}
```

### QI2. `Crear reunion con sus propiedades y asistentes.`
**Request:**
```http
POST http://localhost:3000/api/sucursales/reunion
```

**Body:**
```json
{
    "reunion_id":"R102", // Asignar nueva id manual cada consulta
    "proyecto_id":"P001",
    "fecha":"2024-11-04", // Formato YYYY-MM-DD
    "hora":"07:58", 
    "descripcion":"Avance de proyecto" // Descripcion de reunion por la sucursal
}
```

**Response:**
```json
{
    "relaciones_actualizadas": 6,
    "actualizacion_realizada": true
}
```


## 📁 Estructura del Proyecto
```plaintext
API-2-REDIS-NOE4J/
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── redis.js
│   ├── controllers/
│   │   └──queryController.js
│   ├── middlewares/
│   │   └── cahce/
│   │       └── logger.js
│   ├── routes/
│   │   ├── listRoutes.js
│   │   └── modRoutes.js/
│   └── app.js
├── docker-compose.yml
├── .dockerignore
├── Dockerfile
└── package.json
```

## 💻 Códigos Backend
El backend está desarrollado en Node.js utilizando Express. El código completo se encuentra en la carpeta `src/`. Los controladores gestionan las operaciones principales y las rutas definen los endpoints expuestos.

### app.js
``` js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const neo4jDriver = require('./config/db');
const redisClient = require('./config/redis');
const cache = require('./middlewares/cache/logger');
const listRoutes = require('./routes/listRoutes');
const modRoutes = require('./routes/modRoutes');

const PORT = 3000;

// Middleware para el caché
app.use((req, res, next) => cache(req, res, next, redisClient));
// Body parser
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
// Rutas de la API
app.use('/api', listRoutes);
app.use('/api', modRoutes);

// Manejo de la señal de interrupción
process.on('SIGINT', async () => {
    console.log('Cerrando conexión con Redis...');
    await redisClient.disconnect();
    console.log('Conexión con Redis cerrada');
    neo4jDriver.close();
    console.log('Conexión con Neo4J cerrada');
    process.exit(0); // Finaliza el proceso
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto 3000 \r\n http://localhost:' + PORT)
});

```

### redis.js
``` js
/** 
 * Archivo para configurar la conexión a Redis.
 * 
 * Exporta el cliente a la base de redis.
 * **/
const redis = require('redis');

// Configuración de Redis
const redisClient = redis.createClient({
    socket: {
        port: 6379,
        host: 'redis'
    }
});

// Manejador de eventos para la conexión
redisClient.on('connect', () => {
    console.log('Conectado a Redis');
});

redisClient.on('error', (err) => {
    console.error('Error en la conexión a Redis:', err);
});

redisClient.connect();


module.exports = redisClient;
```

### queryController.js
``` js
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

```

### logger.js
``` js
module.exports = (req, res, next, redisClient) => {

    res.data = null;

    res.on('finish', async () => {

        const currentDate = new Date().toISOString();

        const key = `${req.method}:${currentDate}:${req.originalUrl}`;
        const value = JSON.stringify({
            clave: key,
            time: currentDate,
            req: {
                method: req.method,
                url: req.originalURL,
                headers: req.headers,
                body: req.body
            },
            res: {
                statusCode: res.statusCode,
                statusMessage: res.statusMessage,
                response: req.method === 'GET' ? res.data : ""
            }
        });

        // Imprimir en consola
        // console.log(key);
        // console.log(value);

        // Guardar en redis
        try {
            await redisClient.set(key, value);
        } catch (error) {
            console.log('Error storing data in redis: ', error);
        }
        
    });

    next();
}
```


### listRoutes.js
``` js
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

module.exports = router;

```

### modRoutes.js
``` js
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

```


### package.json
El package.json define la dependencias requeridas del proyecto `body-parser`, `express`, `neo4j-driver`, `redis`.
Tambien agrega el script `start` para que se ejecute el servidor automaticamente en docker.

``` json
{
  "name": "rutas2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node src/app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.3",
    "express": "^4.21.1",
    "neo4j-driver": "^5.26.0",
    "redis": "^4.7.0"
  }
}

```

## 🐳 Archivos docker

### construir la imagen del servidor:
Si desea construir la imagen es necesario tener los archivos `.dockerignore` y `Dockerfile` en la raiz del proyecto.

Para construir la imagen use el comando
```bash
docker build -t <nombre-del-contenedor> .
```

#### .dockerignore
``` plaintext
node_modules
npm-debug.log
```

#### Dockerfile
``` docker
FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]
```

### Docker compose
El proyecto se ejecuta a través de contenedores Docker definidos en el archivo `docker-compose.yml`. Incluye los servicios de:

- **API Backend:** Node.js
- **Redis:** Servicio de almacenamiento en memoria para datos rápidos.
- **Neo4j:** Base de datos de grafos.

Para levantar los contenedores, utiliza:
```bash
docker-compose up -d --build
```
o tambien:
```bash
docker compose -f "docker-compose.yml" up -d --build
```

Usa este comando para ver el estado de los servicios levantados:
```bash
docker compose ps
```

Para eliminar todos los servicios, volumenes y redes:
```bash
docker compose down -v
```

La configuración detallada está disponible en el archivo `docker-compose.yml`.

#### docker-compose.yml

*nota:* La imagen del servidor se descargara automaticamente.

```docker
services:
  # NEO4J service
  neo4j:
    image: neo4j
    container_name: neo1
    ports:
      - "7474:7474"
      - "7687:7687"
    environment:
      - NEO4J_AUTH=none
    networks:
      - labs
  # REDIS service
  redis:
    image: redis
    container_name: redis01
    ports:
      - "6379:6379"
      - "8001:8001"
    networks:
      - labs
  
  # NODE_APP service
  rutas-api:
    image: jair23/api-redis-neo4j
    container_name: rutas-api
    ports:
      - "3000:3000"
    depends_on: 
      - neo4j
      - redis
    networks:
      - labs
networks:
  labs:
    driver: bridge
```