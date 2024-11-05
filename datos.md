## Creacion de Sucursales
```
CREATE (s1:Sucursal {clave: 'S001', nombre: 'Sucursal Acaponeta', direccion: 'Calle A', ciudad: 'Acaponeta', capacidad: 8})
CREATE (s2:Sucursal {clave: 'S002', nombre: 'Sucursal Ixtlan', direccion: 'Calle B', ciudad: 'Ixtlan', capacidad: 5})
CREATE (s3:Sucursal {clave: 'S003', nombre: 'Sucursal San Blas', direccion: 'Calle C', ciudad: 'San Blas', capacidad: 10})
CREATE (s4:Sucursal {clave: 'S004', nombre: 'Sucursal Tepic', direccion: 'Calle D', ciudad: 'Tepic', capacidad: 20})
```


## Creacion de Empleados
```
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
```


## Asignacion de Roles
## Sucursal 001
```
SET e1:Gerente
SET e2:Desarrollador, e2.especializacion = 'back-end', e2.lenguaje = 'Java'
SET e3:Desarrollador, e3.especializacion = 'front-end', e3.lenguaje = 'Python'
SET e4:Soporte
```

## Sucursal 002
```
SET e5:Gerente
SET e6:Desarrollador, e6.especializacion = 'back-end', e6.lenguaje = 'Java'
SET e7:Desarrollador, e7.especializacion = 'front-end', e7.lenguaje = 'Python'
SET e8:Soporte
```

## Sucursal 003
```
SET e9:Gerente
SET e10:Desarrollador, e10.especializacion = 'back-end', e10.lenguaje = 'Python'
SET e11:Desarrollador, e11.especializacion = 'front-end', e11.lenguaje = 'Java'
SET e12:Desarrollador, e12.especializacion = 'full-stack', e12.lenguaje = 'Java'
SET e13:Soporte
SET e14:Soporte
```


## Creacion de Clientes
```
CREATE (c1:Cliente {cid: 'C001', nombre: 'Cliente A', empresa: 'Empresa A', tel: '555555555', correo: 'contacto@empresaA.com'})
CREATE (c2:Cliente {cid: 'C002', nombre: 'Cliente B', empresa: 'Empresa B', tel: '666666666', correo: 'contacto@empresaB.com'})
CREATE (c3:Cliente {cid: 'C003', nombre: 'Cliente C', empresa: 'Empresa C', tel: '777777777', correo: 'contacto@empresaC.com'})
```


## Creacion de Proyectos
```
CREATE (p1:Proyecto {pid: 'P001', nombre: 'Proyecto Alpha', desc: 'Desarrollo de sistema', fecha_inicio: '2024-01-01', fecha_final: '2024-12-31', presupuesto: 1200000})
CREATE (p2:Proyecto {pid: 'P002', nombre: 'Proyecto Beta', desc: 'Implementación de software', fecha_inicio: '2024-03-01', fecha_final: '2024-10-01', presupuesto: 500000})
CREATE (p3:Proyecto {pid: 'P003', nombre: 'Proyecto Gamma', desc: 'Implementación de software', fecha_inicio: '2024-04-01', fecha_final: '2024-11-01', presupuesto: 30000})
CREATE (p4:Proyecto {pid: 'P004', nombre: 'Proyecto Delta', desc: 'Implementación de software', fecha_inicio: '2024-05-01', fecha_final: '2024-12-01', presupuesto: 700000})
```


## Creacion de Reuniones
```
CREATE (r1:Reunion {id: 'R001', fecha: '2024-10-27', hora: '15:00', descripcion: 'Revisión de proyecto'})
CREATE (r2:Reunion {id: 'R002', fecha: '2024-10-28', hora: '15:00', descripcion: 'Revisión de proyecto'})
CREATE (r3:Reunion {id: 'R003', fecha: '2024-10-29', hora: '15:00', descripcion: 'Revisión de proyecto'})
```


## Relacion Empleado-Sucursal [:TRABAJA_EN]
## Sucursal 001
```
CREATE (e1)-[:TRABAJA_EN]->(s1)
CREATE (e2)-[:TRABAJA_EN]->(s1)
CREATE (e3)-[:TRABAJA_EN]->(s1)
CREATE (e4)-[:TRABAJA_EN]->(s1)
```

## Sucursal 002
```
CREATE (e5)-[:TRABAJA_EN]->(s2)
CREATE (e6)-[:TRABAJA_EN]->(s2)
CREATE (e7)-[:TRABAJA_EN]->(s2)
CREATE (e8)-[:TRABAJA_EN]->(s2)
```

## Sucursal 003
```
CREATE (e9)-[:TRABAJA_EN]->(s3)
CREATE (e10)-[:TRABAJA_EN]->(s3)
CREATE (e11)-[:TRABAJA_EN]->(s3)
CREATE (e12)-[:TRABAJA_EN]->(s3)
CREATE (e13)-[:TRABAJA_EN]->(s3)
CREATE (e14)-[:TRABAJA_EN]->(s3)
```

## Relacion Gerente-Proyecto [:GESTIONADO_POR]
```
CREATE (p1)-[:GESTIONADO_POR]->(e1)
CREATE (p2)-[:GESTIONADO_POR]->(e5)
CREATE (p3)-[:GESTIONADO_POR]->(e9)
```

## Relacion Desarrollador-Proyecto [:PROGRAMADO_POR]
```
CREATE (p1)-[:PROGRAMADO_POR]->(e2)
CREATE (p1)-[:PROGRAMADO_POR]->(e3)

CREATE (p2)-[:PROGRAMADO_POR]->(e6)
CREATE (p2)-[:PROGRAMADO_POR]->(e7)

CREATE (p3)-[:PROGRAMADO_POR]->(e10)
CREATE (p3)-[:PROGRAMADO_POR]->(e11)
CREATE (p3)-[:PROGRAMADO_POR]->(e12)
```

## Relacion Soporte-Proyecto [:SOPORTADO_POR]
```
CREATE (p1)-[:SOPORTADO_POR]->(e4)
CREATE (p2)-[:SOPORTADO_POR]->(e8)
CREATE (p3)-[:SOPORTADO_POR]->(e13)
CREATE (p3)-[:SOPORTADO_POR]->(e14)
```

## Relacion Sucursal-Proyecto [:DESARROLLADO_POR]
```
CREATE (p1)-[:DESARROLLADO_POR]->(s1)
CREATE (p2)-[:DESARROLLADO_POR]->(s2)
CREATE (p3)-[:DESARROLLADO_POR]->(s3)
```


## Relacion Cliente-Proyecto [:CONTRATA]
```
CREATE (c1)-[:CONTRATA]->(p1)
CREATE (c2)-[:CONTRATA]->(p2)
CREATE (c2)-[:CONTRATA]->(p3)
```


## Relacion Cliente-Sucursal [:VISITA {fecha: '2024-04-01', hora: '13:20', motivo: 'Inspección'}}]
```
CREATE (c1)-[:VISITA {fecha: '2024-04-01', hora: '13:20', motivo: 'Inspección'}]->(s1)
CREATE (c2)-[:VISITA {fecha: '2024-04-01', hora: '13:20', motivo: 'Inspección'}]->(s2)
CREATE (c2)-[:VISITA {fecha: '2024-04-02', hora: '13:20', motivo: 'Inspección'}]->(s3)
CREATE (c3)-[:VISITA {fecha: '2024-04-03', hora: '13:20', motivo: 'Inspección'}]->(s3)
CREATE (c3)-[:VISITA {fecha: '2024-04-04', hora: '13:20', motivo: 'Inspección'}]->(s3)
CREATE (c3)-[:VISITA {fecha: '2024-04-05', hora: '13:20', motivo: 'Inspección'}]->(s3)
```


## Relacion Sucursal-Reunion [:ORGANIZA]
```
CREATE (s1)-[:ORGANIZA]->(r1)
CREATE (s2)-[:ORGANIZA]->(r2)
CREATE (s3)-[:ORGANIZA]->(r3)
```

## Relacion Cliente-Empleado-Reunion [:ASISTE]
```
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



## Querys

## Q01. Obtener la lista de sucursales que tienen más de 5 empleados.
```
MATCH (s:Sucursal)<-[:TRABAJA_EN]-(e:Empleado)
WITH s, COUNT(e) AS numEmpleados
WHERE numEmpleados > 5
RETURN s.nombre AS NombreSucursal, numEmpleados
```


## Q02. Encontrar los gerentes que gestionan más de 3 proyectos simultáneamente.
```
MATCH (e:Gerente)<-[:GESTIONADO_POR]-(p:Proyecto)
WITH e, COUNT(p) AS numProyectos
WHERE numProyectos > 1
RETURN e
```

## Q03. Obtener la lista de desarrolladores con especialización en back-end que están trabajando en más de 2 proyectos.
```
MATCH (e:Desarrollador{especializacion: 'back-end'})<-[:PROGRAMADO_POR]-(p:Proyecto)
WITH e, COUNT(p) AS numProyectos
WHERE numProyectos > 1
RETURN e
```

## Q04. Obtener la lista de proyectos que tienen un presupuesto mayor a $1,000,000.
```
MATCH (p:Proyecto)
WITH p, p.presupuesto AS presupuesto
WHERE presupuesto > 1000000
RETURN p
```

## Q05. Listar los empleados de soporte técnico de todas las sucursales.
```
MATCH (e:Soporte)
RETURN e
```

## Q06. Encontrar los proyectos que corresponden a un cliente en específico.
```
MATCH (p:Proyecto)<-[:CONTRATA]-(c:Cliente{cid: 'C002'})
RETURN p
```

## Q07. Obtener la lista de sucursales que han recibido visitas de más de 5 clientes diferentes.
```
MATCH (c:Cliente)-[:VISITA]->(s:Sucursal)
WITH s, COUNT(DISTINCT c) AS numClientes
WHERE numClientes > 1
RETURN s
```

## Q08. Encontrar a los desarrolladores que han trabajado en proyectos con un presupuesto total mayor a $500,000.
```
MATCH (p:Proyecto)-[:PROGRAMADO_POR]->(e:Desarrollador)
WITH e, p.presupuesto AS presupuesto
WHERE presupuesto > 1000000
RETURN e
```

## Q09. Obtener la lista de clientes que han contratado más de 3 proyectos en diferentes sucursales.
```
MATCH (p:Proyecto)<-[:CONTRATA]-(c:Cliente)
WITH c, COUNT(p) AS nunmProyectos
WHERE nunmProyectos > 1
RETURN c
```

## Q10. Encontrar las sucursales que tienen más de 5 desarrolladores especializados en full-stack.
```
MATCH (e:Desarrollador{especializacion: 'full-satck'})-[:TRABAJA_EN]->(s:Sucursal)
WITH e, COUNT(e) AS nunmEmpleados
WHERE nunmEmpleados > 0
RETURN e
```

## Q11. Transferir todos los empleados de soporte técnico de una sucursal en específico hacia otra sucursal.
```
MATCH (e:Soporte)-[r:TRABAJA_EN]->(sO:Sucursal {clave: 'S002'})
MATCH (sD:Sucursal {clave: 'S003'})
DELETE r
CREATE (e)-[:TRABAJA_EN]->(sD)
```

## Q12. Reemplaza al gerente de una sucursal en específico.
```
MATCH (e1:Gerente)-[r1:TRABAJA_EN]->(s1:Sucursal {clave: 'S001'})
DELETE r1

MATCH (e2:Gerente)-[r2:TRABAJA_EN]->(s2:Sucursal {clave: 'S002'})
DELETE r2

CREATE (e1)-[:TRABAJA_EN]->(s2)
CREATE (e2)-[:TRABAJA_EN]->(s1)
```


## Q13. Cambie un proyecto en específico a otra sucursal, incluyendo la totalidad de participantes en el proyecto.
```
MATCH (p:Proyecto {pid: 'P001'})-[r:DESARROLLADO_POR]->(sAntigua:Sucursal)
MATCH (sNueva:Sucursal {clave: 'S004'})
DELETE r
CREATE (p)-[:DESARROLLADO_POR]->(sNueva)
```

## Q14. Obtener la lista de clientes que nunca han realizado visitas a las sucursales.
```
MATCH (c:Cliente)
WHERE NOT EXISTS ((c)-[:VISITA]->(:Sucursal))
RETURN c.nombre AS NombreCliente, c.id AS IDCliente
```

## Q15. Todos los empleados de una sucursal determinada son transferidos a otra sucursal por cierre de sucursal de origen.
## Supongamos que la sucursal de origen tiene id 'S001' y la de destino tiene id 'S002'
```
MATCH (sucursalOrigen:Sucursal {clave: 'S001'})<-[rel:TRABAJA_EN]-(empleado:Empleado)
MATCH (sucursalDestino:Sucursal {clave: 'S002'})
```
## Eliminar relación con la sucursal de origen
```
DELETE rel
```

## Crear nueva relación con la sucursal de destino
```
CREATE (empleado)-[:TRABAJA_EN]->(sucursalDestino)
```

### Crear reunion

CREATE (reunion:Reunion {id: 'R001', fecha: '2024-11-05', hora: '10:00', descripcion: 'Reunión de avance del proyecto'})

// Buscar el proyecto específico y sus relaciones
MATCH (p:Proyecto {id: 'P001'})
MATCH (sucursal:Sucursal)-[:DESARROLLADO_EN]->(p)   // La sucursal que organiza el proyecto
MATCH (cliente:Cliente)-[:CONTRATA]->(p)            // El cliente asociado al proyecto
MATCH (empleado:Empleado)<-[:PROGRAMADO_POR|GESTIONADO_POR|SOPORTADO_POR]-(p)     // Empleados que participan en el proyecto

// Relacionar la sucursal organizadora con la reunión
CREATE (sucursal)-[:ORGANIZA]->(reunion)

// Relacionar a cada empleado participante con la reunión
CREATE (empleado)-[:ASISTE_A]->(reunion)

// Relacionar al cliente con la reunión
CREATE (cliente)-[:ASISTE_A]->(reunion)


MATCH (p:Proyecto {pid: 'P003'})
MATCH (sucursal:Sucursal)<-[:DESARROLLADO_POR]-(p)
MATCH (cliente:Cliente)-[:CONTRATA]->(p)
MATCH (empleado:Empleado)<-[:PROGRAMADO_POR|GESTIONADO_POR|SOPORTADO_POR]-(p)

// Usar MERGE para crear la reunión solo si no existe
MERGE (reunion:Reunion {id: 'R1001', fecha: '04-11-2024', hora: '16:20', descripcion: 'Desc'})

// Crear la relación ORGANIZA entre la sucursal y la reunión solo si no existe
MERGE (sucursal)-[:ORGANIZA]->(reunion)

// Crear la relación ASISTE_A entre cada empleado y la reunión solo si no existe
MERGE (empleado)-[:ASISTE_A]->(reunion)

// Crear la relación ASISTE_A entre el cliente y la reunión solo si no existe
MERGE (cliente)-[:ASISTE_A]->(reunion)