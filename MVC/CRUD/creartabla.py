import mysql.connector

try:
    connection = mysql.connector.connect(host='localhost',
                                        port = 3306,
                                        database='MyVet',
                                        user='root',
                                        password='Progresando.com77')

    mySql_Create_Table_Query = """CREATE TABLE animal (
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
                                Esterilizado boolean NOT NULL) """

    cursor = connection.cursor()
    result = cursor.execute(mySql_Create_Table_Query)
    print("tabla animal creada con exito,,!! ")

except mysql.connector.Error as error:
    print("Failed to create table in MySQL: {}".format(error))
finally:
    if connection.is_connected():
        cursor.close()
        connection.close()
        print("MySQL connection is closed")
