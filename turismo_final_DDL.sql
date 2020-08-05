start transaction;

DROP TABLE IF EXISTS actividad_gastronomico;
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE actividad_gastronomico (
    id int4 PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    gastronomico_id int4 NOT NULL,
    actividad_id int4 NOT NULL
);

DROP TABLE IF EXISTS actividades;
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE actividades (
    id int4 PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nombre varchar NOT NULL
);

DROP TABLE IF EXISTS alojamientos;
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE alojamientos (
    id int4 PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nombre varchar NOT NULL,
    domicilio varchar NOT NULL,
    lat numeric(10,6) NOT NULL,
    lng numeric(10,6) NOT NULL,
    foto varchar,
    clasificacion_id int4 NOT NULL,
    categoria_id int4 NOT NULL,
    localidad_id int4 NOT NULL
);

DROP TABLE IF EXISTS categorias;
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE categorias (
    id int4 PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    estrellas varchar NOT NULL,
    valor int4 NOT NULL
);

DROP TABLE IF EXISTS clasificaciones;
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE clasificaciones (
    id int4 PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nombre varchar NOT NULL
);

DROP TABLE IF EXISTS especialidad_gastronomico;
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE especialidad_gastronomico (
    id int4 PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    gastronomico_id int4 NOT NULL,
    especialidad_id int4 NOT NULL  
);

DROP TABLE IF EXISTS especialidades;
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE especialidades (
    id int4 PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nombre varchar NOT NULL
);

DROP TABLE IF EXISTS gastronomicos;
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE gastronomicos (
    id int4 PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nombre varchar NOT NULL,
    domicilio varchar,
    lat numeric(10,6) NOT NULL,
    lng numeric(10,6) NOT NULL,
    foto varchar,
    localidad_id int4
);

DROP TABLE IF EXISTS localidades;
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE localidades (
    id int4 PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nombre varchar NOT NULL
);

commit;