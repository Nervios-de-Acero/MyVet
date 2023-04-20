SELECT ID_Mascota, Nombre, Especie, Raza  FROM animal;
select * from Tratamiento;
  
  Insert into Tratamiento (nombre_tratamiento, fecha, tipo, observaciones)
  values("vacuna", current_date(), "vacunación", "se inyectó vacuna antirrábica");

  SELECT ID_Mascota
  FROM animal a
  INNER JOIN Tratamiento t ON t.ID_tratamiento = a.ID_Mascota;

  SELECT * FROM animal;
  
 
  INSERT INTO animal (Nombre, Edad, Especie, Raza,Peso,Sexo,Fecha_nac,Esterilizado, Características)
  VALUES ("Firulais","5 años", "Perro", "Pomerania",2,"Masculino","2017-08-05",True, "Tostado");
  
  INSERT INTO animal (Nombre, Edad, Especie, Raza,Peso,Sexo,Fecha_nac,Esterilizado, Características)
  VALUES ("Sachiel", "13 años", "Gato", "Británico bicolor", 6, "Masculino", "2009-02-01", True, "Blanco y negro");
  
  UPDATE animal SET Nombre = "Azirafel", Edad = "2 años", Raza = "Común europeo", Peso = 4, Fecha_nac = "2020-07-30", Características = "Rubio"  
  WHERE ID_Mascota = 3;
  
  
  SELECT * FROM Protege;

  SELECT * FROM Turno;

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

INSERT INTO animal (Nombre, Edad, Especie, Raza,Peso,Sexo,Fecha_nac,Esterilizado, Características)
VALUES ("Bills","5 años", "Gato", "Común Europeo",6,"Masculino","2017-03-30",True, "Blanco con manchas atigradas marrones y negras");
