#from codecs import getencoder
#import decimal
from fastapi import FastAPI
import mysql.connector    # https://www.w3schools.com/python/python_mysql_getstarted.asp

app = FastAPI()  
connection =  mysql.connector.connect(host = "localhost", user = "root", password = "Holdon234&$!",database = "fitness")

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


#@app.post("/client")
  
#def post_client(user_names:str, first_name:str, last_name:str, passwords:str, security_question:str, security_answer:str, gender:str, age:int, height:int, weights:float, calorie_intake_per_day:int):

  # user_names = '1"); Delete from client'
  
#  sql_insert_Query = """
#    INSERT INTO client 
#      (user_names, first_name, last_name, passwords, security_question, 
#      security_answer, gender, age, height, weights, calorie_intake_per_day) 
#      VALUES 
#      ("%s", "%s", "%s", "%s", "%s", "%s", "%s", "%d","%d", "%.2f", "%d")"""
#  cursor = connection.cursor()

#  cursor.execute(sql_insert_Query, (user_names, ),(first_name, ),(last_name, ),(passwords, ),(security_question, ),(security_answer, ), (gender, ), (age, ), (height, ), (weights, ), (calorie_intake_per_day, ));

    #The id doesn't exist until after INSERT occurs
#  cursor = connection.cursor()
#  cursor.execute('SELECT LAST_INSERT_ID() AS new_id')
#  record = cursor.fetchone()

#  record.new_id #=> whatever id you have
#  return {"client":record}

#Give the user id to use for the get method
  # Figure out how FastAPI want you to return the location from a POST request
  #return location f'/client/{new_id}' ?????#return location of an api

###########

# # SAFE 
#printf("%d %s %d", int1, "%f %d %s %f" , int2 )