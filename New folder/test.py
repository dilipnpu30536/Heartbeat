import mysql.connector
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="123456789",
    database="product",
    auth_plugin="mysql_native_password"
)
cursor=mydb.cursor(buffered=True)
print(mydb)