import mysql.connector

try:
    connection = mysql.connector.connect(host='localhost',
                                         database='myvet',
                                         user='root',
                                         password='eym72bqr')

  
    mySql_query = "select * from animal"
  

    cursor = connection.cursor()
    cursor.execute(mySql_query)
   
    rows=cursor.fetchall()
    for row in rows:
    	print(row)

   
    cursor.close()

except mysql.connector.Error as error:
    print("Failed to insert record into Laptop table {}".format(error))

finally:
    if connection.is_connected():
        connection.close()
        print("MySQL connection is closed")
