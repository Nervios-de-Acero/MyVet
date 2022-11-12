from datetime import datetime

import mysql.connector

try:
    conexion = mysql.connector.connect(user='root', password='DECIMEEMII',
                                   host='localhost', 
                                   database='myvet',
                                   port='3307')

    mySql_insert_query = """INSERT INTO Tratamiento (Id_Tratamiento, Nombre_Tratamiento, Fecha, Tipo, Observaciones) 
                            VALUES (%s, %s, %s, %s, %s) """

    cursor = conexion.cursor()
    current_Date = datetime.now()
    # convert date in the format you want
    formatted_date = current_Date.strftime('%Y-%m-%d %H:%M:%S')
    insert_tuple = (1, 'Vacuna Antirrabica', current_Date, 'Vacunacion', 'Se le aplicó la vacuna antirrabica')

    result = cursor.execute(mySql_insert_query, insert_tuple)
    conexion.commit()
    print("Date Record inserted successfully")

except mysql.connector.Error as error:
    conexion.rollback()
    print("Failed to insert into MySQL table {}".format(error))

finally:
    if conexion.is_connected():
        cursor.close()
        conexion.close()
        print("MySQL connection is closed")
