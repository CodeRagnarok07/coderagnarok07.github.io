
---
title: db querys
# template: splash
# hero:
#   tagline: Congrats on setting up a new Starlight project!
#   actions:
#     - text: Example Guide
#       link: /wiki/programacion/element/
#       icon: right-arrow
#       variant: primary

---


# Database

## lectura de campos selecciondos de la base ded actions

```py
from sqlalchemy import  select
from sqlalchemy.orm import  load_only


# http://localhost:8000/api/operaciones/servicios/
@router.get("/api/operaciones/servicios/")
def read_users(
    db: Session = Depends(get_db),
    limit: int = 10,
    offset: int = 0,
):
    Model = ope_servicios_containers

    query = (
        select(Model)
        .options(load_only(Model.id, Model.container_id))
        .limit(limit)
        .offset(offset)
    )

    servicios = db.scalars(query).all()
    print(servicios)
    return {"servicios": servicios}
```



# campos seleccionados en llave foranea

```py

from sqlalchemy import  select
from sqlalchemy.orm import  defaultload, load_only, selectinload


# http://localhost:8000/api/operaciones/servicios/
@router.get("/api/operaciones/servicios/")
def read_users(
    db: Session = Depends(get_db),
    limit: int = 2,
):
    # db = select(ope_servicios_containers)
    query = (
        select(ope_servicios_containers)
        .options(
            load_only(
                ope_servicios_containers.id,
                ope_servicios_containers.ingreso_puerto,
                ope_servicios_containers.fecha_carga,
            ),
            selectinload(ope_servicios_containers.container).load_only(
                para_containers.codigo
            ),
            selectinload(ope_servicios_containers.cliente)
            # .load_only(para_clientes.nombre),
        )
        .limit(limit)
    )

    servicios = db.scalars(query).all()

    return {"servicios": servicios}

```