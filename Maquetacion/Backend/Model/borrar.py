import mysql.connector 

try:
    connection = mysql.connector.connect(host='localhost',
                                         database='myvet',
                                         user='root',
                                         password='root',
                                         port='3306')

    mySql_insert_query = " DELETE FROM animal  WHERE ID_Mascota = '1';"

    
    cursor = connection.cursor()
    cursor.execute(mySql_insert_query)
    connection.commit()
    print(cursor.rowcount, "registro(s) borrado") 

except mysql.connector.Error as error:
    print("Failed to delete record into MySQL table {}".format(error))

finally:
    if connection.is_connected():
        cursor.close()
        connection.close()
        print("MySQL connection is closed")
