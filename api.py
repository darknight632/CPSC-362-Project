
#IMPORTANT NOTE fastapi doesn't allow you to post via the body only in the url with ? separating the frist attribute
# and & to separate the other attributes
#EX:http://127.0.0.1:8000/client?user_names=foo&first_name=bloa

#from codecs import getencoder
#import decimal
from pickle import TRUE
from fastapi import FastAPI
import mysql.connector    # https://www.w3schools.com/python/python_mysql_getstarted.asp

app = FastAPI()  
connection =  mysql.connector.connect(host = "us-cdbr-east-06.cleardb.net", user = "b7282e7db1ca80", password = "b48f6bbf",database = "heroku_93ce4b8f595f1c9")
#mysql://b7282e7db1ca80:b48f6bbf@us-cdbr-east-06.cleardb.net/heroku_93ce4b8f595f1c9?reconnect=true
#connection =  mysql.connector.connect(host = "localhost", user = "root",
# password = "Holdon234&$!",database = "fitness")

@app.get("/security_questions")
def get_security_questions():
    
# SAFE because no USER INPUT in SQL
    sql_select_Query = "SELECT * from security_questions"
    cursor = connection.cursor()
    cursor.execute(sql_select_Query)
    # get all records
    records = cursor.fetchall()
    return {"security_questions": records}

@app.get("/client/{client_id}")
def get_client(client_id: int):

# using "format string"

    # BAD client_id = "0 OR 1=1"
    # BAD client_id = '0; DELETE FROM client'

  # 1 way to fix: SANITIZE
  # sanitized_id = //do a regular expression match for the integer in 'client_id'
  
    sql_select_Query = 'SELECT * FROM client WHERE id = %s'
    cursor = connection.cursor()
    #the {id: client_id} treats whaever is put in it like a
   #variable and helps eliminates sql injections
  #%{id} never modifies the (SQL)format string but does send the data alongside as variablez
    #cursor.execute(sql_select_Query, { 'id': client_id } )
    cursor.execute(sql_select_Query,  (client_id, ) )
    records = cursor.fetchone()

    return {"client": records}


# user_names = '1"); Delete from client'
  #("%s", "%s", "%s", "%s", "%s", "%s", "%s", "%d","%d", "%.2f", "%d")""")
  # sql_insert_Query = """
  #   INSERT INTO client 
  #     (user_names, first_name, last_name, passwords, security_question, 
  #     security_answer, gender, age, height, weights, calorie_intake_per_day) 
  #     VALUES 
  #     (%s, %s, %s, %s, %s, %s, %s, %d, %d, %.2f, %d)"""
  # cursor = connection.cursor()

  # cursor.execute(sql_insert_Query, (user_names, first_name, last_name, passwords, security_question, 
  #   security_answer, gender, age, height, weights, calorie_intake_per_day) );

#When it comes to python mysql binding all parameters know how to convert into data types so
#every format specifier should be %s

@app.post("/client") 
def post_client(id:int, user_names:str, first_name:str, last_name:str, passwords:str, security_question:str, 
  security_answer:str, gender:str, age:int, height:int, weights:float, calorie_intake_per_day:int):
    sql_insert_Query = """
    INSERT INTO client 
      (id,user_names, first_name, last_name, passwords, security_question, security_answer, gender, age, height, weights, calorie_intake_per_day) 
      VALUES 
      (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""
    cursor = connection.cursor(buffered=True)

    cursor.execute(sql_insert_Query, (user_names, first_name, last_name, passwords, 
    security_question, security_answer, gender, age, height, weights, calorie_intake_per_day) )

    #The id doesn't exist until after INSERT occurs
    #buffered=True retrieves the rows we need to put the data in
    cursor = connection.cursor(buffered=True)
    cursor.execute('SELECT LAST_INSERT_ID() AS new_id FROM client')
    record = cursor.fetchone()

    #we need to use the connection.commit() in order to make sure that any changes to the database actually happen
    connection.commit()
    cursor.close()
    connection.close()
    #record.new_id #=> whatever id you have
    return {"client":record}

#Give the user id to use for the get method
  # Figure out how FastAPI want you to return the location from a POST request
  #return location f'/client/{new_id}' ?????#return location of an api

###########

# # SAFE 
#printf("%d %s %d", int1, "%f %d %s %f" , int2 )


#need to implement update for user name, first name, email ,and passwords
#put is used to change the entire database while patch is used for certain parts of the database
#@app.patch("/client_update_user_name/{client_id}")
#def update_client(user_names:str, client_id: int):
#  sql_insert_Query = """
#    UPDATE client    
#    SET user_names = %s
#    WHERE id = (?)""", [client_id]
#  cursor = connection.cursor(buffered = True)
#  cursor.execute(sql_insert_Query, (user_names, client_id ) )
#  connection.commit()
#  cursor.close()
#  connection.close()
#  return {"client":record}