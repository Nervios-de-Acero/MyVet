CREATE DATABASE myvet;
USE myvet;

CREATE TABLE usuario (
   Id_Cliente int NOT NULL,
   Nombre varchar(25) NOT NULL,
   Apellido varchar(25) NOT NULL,
   DNI int NOT NULL,
   email varchar(25) NOT NULL,
   Direccion varchar(40) NOT NULL,
   Telefono int NOT NULL
);
		
ALTER TABLE usuario
  ADD PRIMARY KEY (Id_Cliente);

ALTER TABLE usuario
  MODIFY Id_Cliente int NOT NULL AUTO_INCREMENT;
  
CREATE TABLE animal (
	ID_Mascota int PRIMARY KEY AUTO_INCREMENT NOT NULL,
	Nombre varchar(10) NOT NULL,
	Edad int NOT NULL,
	Raza varchar(20) NOT NULL,
	Vacuna date NOT NULL,
	Desparasitacion date NOT NULL,
	Diagnostico text NOT NULL,
	Id_Vacuna int NOT NULL,
	Turno int NOT NULL, 
	Peso int NOT NULL,
	Sexo varchar(10) NOT NULL,
	Fecha_nac date NOT NULL,
	Esterilizado boolean NOT NULL
);

CREATE TABLE Sucursales 
(
Id_Sucursal int PRIMARY KEY not null auto_increment, 
Direccion varchar(40) not null,
Producto varchar(100) not null
);

CREATE TABLE visita (
	ID_visita int PRIMARY KEY AUTO_INCREMENT NOT NULL,
	detalles varchar(25) NOT NULL,
	tipo_control varchar(10) NOT NULL,
	fecha_control date NOT NULL
);

 CREATE TABLE Tratamiento (
  ID_tratamiento int PRIMARY KEY AUTO_INCREMENT NOT NULL,
  nombre_tratamiento varchar(100) NOT NULL,
  fecha date,
  tipo varchar(100) NOT NULL,
  observaciones varchar(250)
  );

  CREATE TABLE Solicita (
  ID_Turno1 int NOT NULL,
  ID_Mascota4 int NOT NULL,
  foreign key(ID_Turno1) references Turno(ID_turno),
  foreign key(ID_Mascota4) references animal(ID_Mascota)
  );
  
  CREATE TABLE Atiende (
  ID_Mascota5 int NOT NULL,
  ID_Profesional4 int NOT NULL,
  foreign key(ID_Mascota5) references animal(ID_Mascota),
  foreign key(ID_Profesional4) references Profesional(ID_Profesional)
  );
  
  select * from Tratamiento;
  
  Insert into Tratamiento (nombre_tratamiento, fecha, tipo, observaciones)
  values("vacuna", current_date(), "vacunación", "se inyectó vacuna antirrábica");

  SELECT ID_Mascota
  FROM animal a
  INNER JOIN Tratamiento t ON t.ID_tratamiento = a.ID_Mascota;

  SELECT * FROM animal;
  
  ALTER TABLE animal DROP COLUMN Vacuna; 
  ALTER TABLE animal DROP COLUMN Id_Vacuna; 
  ALTER TABLE animal DROP COLUMN Desparasitacion;
  ALTER TABLE animal DROP COLUMN Turno;
  ALTER TABLE animal DROP COLUMN Diagnostico;
  
  ALTER TABLE animal MODIFY Edad varchar(30);
  ALTER TABLE animal ADD Especie varchar(15) AFTER Edad;
  ALTER TABLE animal ADD Características varchar(200) AFTER Esterilizado;

  INSERT INTO animal (Nombre, Edad, Especie, Raza,Peso,Sexo,Fecha_nac,Esterilizado, Características)
  VALUES ("Firulais","5 años", "Perro", "Pomerania",2,"Masculino","2017-08-05",True, "Tostado");
  
  INSERT INTO animal (Nombre, Edad, Especie, Raza,Peso,Sexo,Fecha_nac,Esterilizado, Características)
  VALUES ("Sachiel", "13 años", "Gato", "Británico bicolor", 6, "Masculino", "2009-02-01", True, "Blanco y negro");
  
  UPDATE animal SET Nombre = "Azirafel", Edad = "2 años", Raza = "Común europeo", Peso = 4, Fecha_nac = "2020-07-30", Características = "Rubio"  
  WHERE ID_Mascota = 3;
  
  CREATE TABLE Turno 
  (
  id_turno INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  fecha_turno DATE NOT NULL,
  especialidad VARCHAR(30) NOT NULL
  );

  CREATE TABLE Protege
  (
  id_Cliente1 INT NOT NULL,
  id_Mascota1 INT NOT NULL,
  FOREIGN KEY(id_Cliente1) REFERENCES usuario(Id_Cliente),
  FOREIGN KEY(id_Mascota1) REFERENCES animal(ID_Mascota)
  );

  ALTER TABLE Turno
  RENAME COLUMN id_turno TO ID_turno;  

  ALTER TABLE Protege
  RENAME COLUMN id_Cliente1 TO ID_Cliente1,
  RENAME COLUMN id_Mascota1 TO ID_Mascota1; 

  SELECT * FROM Protege;

  SELECT * FROM Turno;

  CREATE TABLE Profesional
  (
  ID_Profesional INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  Nombre VARCHAR(100) NOT NULL,
  Especialidad VARCHAR(30) NOT NULL
  );

  SELECT * FROM Profesional;

  ALTER TABLE Profesional
  MODIFY Especialidad VARCHAR(100);

  INSERT INTO Profesional(Nombre, Especialidad)
  VALUES("María Alejandra Del Pilar Ugarte Laclós", "Dermatología");

  INSERT INTO Profesional(Nombre, Especialidad)
  VALUES("Antonio Milisenda", "Diagnóstico por imágenes orientación radiología"),
      ("Carolina Altamirano", "Clínica médica");


  SET @varID := (SELECT usuario.Id_Cliente FROM usuario 
  WHERE usuario.DNI = 38644396);
  SET @varIDanimal := (SELECT animal.ID_Mascota FROM animal 
  WHERE animal.Nombre = "Azirafel");

  INSERT INTO protege(ID_Cliente1, ID_Mascota1)
  VALUES(@varID, @varIDanimal);

  SELECT * FROM Protege;

  SELECT Protege.ID_Cliente1 AS 'ID Cliente',
  usuario.Nombre AS 'Nombre Cliente',
  usuario.Apellido AS 'Apellido',
  Protege.ID_Mascota1 AS 'ID Mascota',
  animal.Nombre AS 'Nombre Animal'
  FROM Protege
  INNER JOIN usuario
  ON Protege.ID_Cliente1 = usuario.Id_Cliente
  INNER JOIN animal
  ON Protege.ID_Mascota1 = animal.ID_Mascota;




 /* No hay conexión entre tablas aun-
 SELECT animal.Nombre,Tratamiento.nombre_tratamiento
 FROM animal 
 INNER JOIN Tratamiento ON animal.ID_Mascota = Tratamiento.ID_Mascota;
  */


INSERT INTO animal (Nombre, Edad, Especie, Raza,Peso,Sexo,Fecha_nac,Esterilizado, Características)
VALUES ("Marcelino","2 años", "Perro", "Caniche",4,"Femenino","2022-10-15",True, "Blanco");

UPDATE animal
SET Edad = 4, Sexo = "Masculino", Fecha_nac = "2018-10-15"
WHERE Nombre = "Marcelino";

SELECT * FROM animal;

INSERT INTO usuario (Nombre, Apellido, DNI, email, Direccion, Telefono)
VALUES ("Aylen", "Gil", 38644396, "lag9512@gmail.com", "Calle Falsa 123", 1122334455);

SELECT * FROM usuario;

SELECT * FROM Protege;
