# tipos de datos
http://codigoelectronica.com/blog/postgresql-tipo-de-datos


# PRIMARY KEY y FOREIGN KEY

```SQL
CREATE TABLE tabla_1(
    id_tabla_1 INTEGER PRIMARY KEY AUTOINCREMENT
); 
CREATE TABLE tabla_2(
    id_tabla_2 INTEGER PRIMARY KEY AUTOINCREMENT,
    id_tabla_1 INTEGER,
    FOREING KEY (id_Tabla_1) REFERENCES tabla_1(idTabla_1)
    -- REFERENCES Hace referencia a la tabla 1
);
```

PRIMARY KEY: es la que provee a las tablas, siempre se agrega como id a todas las tablas ⇒  `INTEGER PRIMARY KEY AUTOINCREMENT`

#### Ejemplo1:

```SQL
CREATE TABLE carreras(
    idCarrera INTEGER 
    PRIMARY KEY AUTOINCREMENT,
    Nombre varchar(30), 
    duracion INTEGER
);

CREATE TABLE Alumnos(
    idAlumnos INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre varchar(30),
    apellido varchar(30),
    segundo_apellido varchar(30),
    email varchar(40),
    id_carrera INTEGER,
    FOREIGN KEY (id_carrera) REFERENCES carreras(idCarrera));
    -- FOREIGN KEY: Es la que accede a las llaves primarias ⇒ 
    -- FOREIGN KEY (id_carrera) REFERENCES carreras(idCarrera)



```



# ALTER 
| Modifica la tabla creada
```SQL

-- agregar campos
ALTER TABLE table_name
ADD new_field TEXT;

-- eliminar campos
ALTER TABLE table_name
DROP new_field;

-- modificar tabla -tipo de dato
ALTER TABLE table_name
ALTER COLUMN new_field SET DATA TYPE VARCHAR(50);

-- modificar tablar - nombre de tabla
ALTER TABLE table_name
RENAME COLUMN new_field TO old_field;

-- cambiar nombre de la tabla
ALTER TABLE user_table 
RENAME TO users

```



# METODOS QUERY

```SQL
-- AGREGAR DATOS
INSERT INTO tabla(campo1, campo2) 
VALUES('campo 1', 'campo2');

-- SELECT; Selecciona un dato de una table por una clausula
SELECT * FROM tablaName 
where campo2 = ‘todos los que tengan este nombre’ 

-- UPDATE actualiza un dato de una table por una clausula
UPDATE tablaName 
SET campo1='alquimista', campo2='30 min' 
WHERE idTabla=4 

-- DELETE Elimina un dato de una table por una clausula
DELETE FROM nameTable 
WHERE idTabla=3 -- BORAR 1 DATO
```

# Clausulas SELECT


HAVING
INNER JOIN, LEFT JOIN, FULL OUTER JOIN, CROSS JOIN
UNION, INTERSECT y EXCEPT

## DISTINCT

```sql
 -- DISTINCT devuelve una tabla con el campo distinct sin repetirlo; para conocer cuantos tipos diferentes hay de ese campo
SELECT DISTINCT product_type from products;
```


## Where y order By

```sql
-- Consultas
select product_name, product_price from products WHERE product_type = 'café';

SELECT
    product_name || ' ' || product_price,
    product_id
FROM products;


SELECT
    product_name || ' ' || product_price AS "contexto de producto", -- concatenar datos
    product_price * 100 AS "*100", -- realiza operaciones
    product_id
FROM products;


SELECT * FROM products ORDER BY product_price ASC; -- ORDENA DE FORMA ASCENDENTE

UPDATE products set product_price=30.84 where product_name = 'Muffin de Arándano';

SELECT * FROM products ORDER BY product_price DESC; -- ORDENA DE FORMA DESCENDENTE;

-- crea un campo len del numero de caracteres de 'product-name' y lo ordena descendentemente
SELECT product_name, LENGTH(product_name) AS len FROM products ORDER BY len DESC;
```


## CLAUSULAS WHERE

| la clausular WhERE se puede usar en SELECT UPDATE DELETE 

```SQL
-- Operadores Logicos de WHERE
AND ; selecionar dos elementos
OR ;  cumple una o la otra por igual las dos
NOT;  Negacion (Es el unico que se coloca adelante de la condicion)

-- Combinaciones
SELECT * FROM Table 
WhERE campo1 = 'dato1'

SELECT * FROM Table
WHERE NOT campo1 = 'dato1'

SELECT * FROM Table 
WHERE idTable=2 AND campo1 = 'dato1' OR idCapmpo > 1



-- Operadores relacionales de WHERE numericos
SELECT * FROM Table WhERE campo1 <> 'dato1'
= --> Igual
<> --> Distinto
!= --> Distinto
> --> Mayor que
< --> Menor que
>= --> mayor o igual
<= --> Menor o igual

-- BETWEEN
SELECT * FROM carreras WHERE duracion >=2 AND duracion <=3
SELECT * FROM carreras WHERE duracion BETWEEN 1 AND 3
SELECT * FROM carreras WHERE duracion BETWEEN 1 AND 3

-- IN: recupera varios en una tuplacomo AND
SELECT * FROM carreras WHERE duracion IN (1, 2 , 3)

-- Operadores relacionales de WHERE numericos

-- LIKE; información parcial
SELECT * FROM carreras WHERE nombre LIKE 'a%'
SELECT * FROM carreras WHERE nombre NOT LIKE 'a%'

-- OPERADORES DE LIKE
'a%' --> comienza con
'_a%' --> comodin por que no se conocen las primeras letra pero si la segunda
'%a' --> Termina con 
'%a%' --> no empieza con a ni termina, pero lo tienen en el centro
'a%' --> comienza con
'a%' --> comienza con


-- ORDER by ; ordenar 
SELECT * FROM carreras ORDER by duracion
```




## GROUP BY funciones de agrupamiento ( solo numéricos)

```SQL
-- COUNT ; recupera la cantidad de resultados
SELECT count(idCarrera) FROM carreras WHERE duracion = 2

-- SUM; total de la id de los resultados
SELECT sum(idCarrera) FROM carreras WHERE duracion = 2

-- MAX; el máximo encontrado de entre todos los resultados
SELECT max(duracion) FROM carreras

-- MIN
SELECT min(duracion) FROM carreras

-- AVG
SELECT AVG(duracion) FROM carreras


SELECT DISTINCT product_type from products; -- solo acepta un parametro

-- Agrupa por el primer parametro
SELECT product_type, COUNT(product_name) as "count_name", COUNT(product_type) as "count type" from products GROUP BY product_type;


-- HAVING ejecuta un where dentro de GROUP

SELECT product_type, COUNT(product_name) as count_name from products GROUP BY product_type HAVING COUNT(product_name) > 2;

```



## LIMIT o FETCH


```sql

-- limita el numero de respuestas
SELECT * FROM products WHERE product_price BETWEEN 1 AND 3 LIMIT 5;

-- OFFSET OMITE LOS PRIMEROS
SELECT * FROM products WHERE product_price BETWEEN 1 AND 3 OFFSET 1;


```

## NULL

SELECT * FROM products WHERE product_type IS NULL;

-- Agrupa por el primer parametro
SELECT product_type, COUNT(product_name) as "count_name", COUNT(product_type) as "count type" from products GROUP BY product_type;

SELECT product_type, COUNT(product_name) as count_name from products GROUP BY product_type HAVING COUNT(product_name) > 2;


# JOIN

```sql


-- INERT JOIN
SELECT prod.product_name, cop.cuantity  -- this fields
FROM products AS prod -- tabla 1
JOIN client_order_product AS cop -- table 2
ON prod.product_id = cop.product_id; -- relation table1_id = table2_id


-- LEFT JOIN join all table 1 with table 2
SELECT prod.product_name, cop.cuantity  -- this fields
FROM products AS prod -- tabla 1
LEFT JOIN client_order_product AS cop -- join all table 1 with table 2
ON prod.product_id = cop.product_id; -- relation table1_id = table2_id

-- RIGHT JOIN join all table 2 with table 2
SELECT prod.product_name, cop.cuantity  -- this fields
FROM products AS prod -- tabla 1
RIGHT JOIN client_order_product AS cop -- join all table 2 with table 1
ON prod.product_id = cop.product_id; -- relation table1_id = table2_id


-- FULL JOIN join all without relations
SELECT prod.product_name, cop.cuantity  -- this fields
FROM products AS prod -- tabla 1
FULL JOIN client_order_product AS cop -- join all table 2 with table 1
ON prod.product_id = cop.product_id; -- relation table1_id = table2_id

```



## combinancion de tablas

```sql
-- JOIN + N tables
SELECT client_name, co.date,products.product_name, cop.cuantity, products.product_price, cop.cuantity * products.product_price AS total   -- this fields
FROM client_order AS co
JOIN client_order_product AS cop 
ON co.client_order_id = cop.client_order_id
JOIN clients
on clients.client_id = co.client_id
JOIN products
on products.product_id = cop.product_id;

```



#