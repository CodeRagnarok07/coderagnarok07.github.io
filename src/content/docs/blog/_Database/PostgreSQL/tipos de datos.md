
````sql
-- VALIDATIONS

-- PRIMARY KEY

table_id SERIAL,    -- auto incremental [ postgresql, mysql]
PRIMARY KEY (table_id) -- obligatorio definir la clave primaria

table_id SERIAL PRIMARY KEY,     -- segunda manera de definir primary key

-- FOREIGN KEY
other_table_id FOREIGN KEY REFERENCES other_table(other_table_id),-- DEFINE ESTE CAMPO COMO LLAVE FORÁNEA
client_id INT REFERENCES clients(clients_id)

FOREIGN KEY (other_table_id) REFERENCES other_table(other_table_id),-- DEFINE ESTE CAMPO COMO LLAVE FORÁNEA

-- NOT NULL => no en blanco

edad INT,   -- campo normal int
name1 VARCHAR(100) NOT NULL, -- texto longitud(100) no ocupable
name2 CHAR(100) NOT NULL, -- texto longitud() ocupable con espacios en blanco

descripción TEXT,               -- texto plano puede decidirse la longitud
init_date DATE DEFAULT CURRENT_DATE -- DEFAULT NOW(), -- fecha actual default automática

-- CHECK => define una condición
product_stock INT CHECK(product_stock > 0 ) DEFAULT 0,

;

```
