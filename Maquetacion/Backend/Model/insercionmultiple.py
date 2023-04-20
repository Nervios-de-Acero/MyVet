import mysql.connector
from datetime import date

fecha = date.today()

try:
  connection = mysql.connector.connect(host='localhost',
                                        database='veterinaria',
                                        user='root',
                                        password='root')

  mySql_insert_query = """INSERT INTO Turno (fecha_turno, especialidad) 
                          VALUES (%s,%s) """

  records_to_insert = [(f"{fecha}", "Nutrición"),
                        ("2022-12-05", "Cardiología"),
                        ("2022-11-14", "Medico clínica")]

  cursor = connection.cursor()
  cursor.executemany(mySql_insert_query, records_to_insert)
  connection.commit()
  print(cursor.rowcount, "Record inserted successfully into Turno")

except mysql.connector.Error as error:
  print("Failed to insert record into MySQL table {}".format(error))

finally:
  if connection.is_connected():
      cursor.close()
      connection.close()
      print("MySQL connection is closed")