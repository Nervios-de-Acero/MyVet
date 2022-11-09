from datetime import date

import mysql.connector

fecha = date.today()

def insert_varibles_into_table(nombre_tratamiento, fecha, tipo, observaciones):
    try:
        connection = mysql.connector.connect(host='localhost',
                                             database='myvet',
                                             user='root',
                                             password='root',
                                             port='3306')
        cursor = connection.cursor()
        mySql_insert_query = """INSERT INTO Tratamiento (nombre_tratamiento, fecha, tipo, observaciones) 
                                VALUES (%s, %s, %s, %s) """

        record = (nombre_tratamiento, fecha, tipo, observaciones)
        cursor.execute(mySql_insert_query, record)
        connection.commit()
        print("Record inserted successfully into tratamiento table")

    except mysql.connector.Error as error:
        print("Failed to insert into MySQL table {}".format(error))

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")

insert_varibles_into_table("control", fecha , "mensual", "se le realizó control mensual")


