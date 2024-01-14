
-- definir un lenguage

CREATE LANGUAGE plpgsql



--- FUNTIONS
CREATE OR REPLACE FUNCTION suma(numeric, numeric) RETURNS numeric
AS
$$
DECLARE -- define las variables a utilizar
    _a numeric;
    _b numeric;
    _res numeric;
BEGIN
    _a := $1; -- asignamos a la variable a el primer elemento de la funcion
    _b := $2;
    _res := _a * _b;
	RETURN _res ;
END;
$$
LANGUAGE plpgsql;

-- evocacion de funcion
select suma(5,2) 


-- IS POSITIVE
CREATE OR REPLACE FUNCTION is_positive(int) RETURNS boolean
AS
$$
DECLARE
	_a int;
	_res boolean := false;
BEGIN
	_a := $1;
	
	if (_a>0 or _a = 0)then
		_res = true;
	else 
		if (_a = 0) then
		_res = true;
		end if;
	end if;
	return _res;
END
$$
LANGUAGE plpgsql;

select is_positive(-1)