import mysql.connector

try:
    connection = mysql.connector.connect(host='localhost',
                                         database='myvet',
                                         user='root',
                                         password='root')

    mySql_insert_query = """ INSERT INTO animal (Nombre, Edad, Especie, Raza,Peso,Sexo,Fecha_nac,Esterilizado, Características)
                                VALUES ("Gino","5 años", "Gato", "Comun Europeo",7,"Masculino","2017-10-10",True, "Blanco atrigrado gris y marron"); """

    cursor = connection.cursor()
    cursor.execute(mySql_insert_query)
    connection.commit()
    print(cursor.rowcount, "Record inserted successfully into animal")
    cursor.close()

except mysql.connector.Error as error:
    print("Failed to insert record into Laptop table {}".format(error))

finally:
    if connection.is_connected():
        connection.close()
        print("MySQL connection is closed")
