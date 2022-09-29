from codecs import getencoder
import decimal
from fastapi import FastAPI
import mysql.connector
from pydantic import BaseModel
#import requests
app = FastAPI()  
connection =  mysql.connector.connect(host = "localhost", user = "root", password = "Holdon234&$!",database = "fitness")

@app.get("/security_questions")
def read_user():
    

    sql_select_Query = "select * from security_questions"
    cursor = connection.cursor()
    cursor.execute(sql_select_Query)
    # get all records
    records = cursor.fetchall()
    return {"message": records}

@app.get("/client/{client_id}")
def get_client(client_id: int):

# using "format string"

    sql_select_Query = 'SELECT * FROM client WHERE id_number = {0}'.format(client_id)
    cursor = connection.cursor()
    cursor.execute(sql_select_Query)

    records = cursor.fetchall()

    return {"message": records}

#
#class Data(BaseModel):
#    user_names : str
#    first_name : str
#    last_name : str
#    passwords : str
#    security_question : str
#    security_answer : str
#    gender : character
#    age : int
#    height : int
#    weights : decimal
#    calorie_intake_per_day : int

#@app.post("client/client_info")
#def post_client(data: Data):

#    sql_insert_Query = 'INSERT INTO client (user_names, first_name, last_name, passwords, security_question, security_answer, gender, age, height, weights, calorie_intake_per_day) values ("%s", "%s", "%s", "%s", "%s", "%s", "%c", "%d","%d", "%.2f", "%d")'
    
#    cursor = connection.cursor()
#    cursor.execute(sql_insert_Query, data)
