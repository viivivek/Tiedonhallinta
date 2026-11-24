import mysql.connector
from flask import Flask, Response, jsonify
from flask_cors import CORS
import json
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route("/toimittaneet_yritykset/<summa>")
def toimittaneet_yritykset(summa):
    sql = (f"select toimittaja.nimi, osto.toteuma "
           f"from osto, toimittaja where osto.toimittaja_id = toimittaja.toimittaja_id "
           f"and osto.toteuma > {summa};")
    kursori = yhteys.cursor()
    kursori.execute(sql)
    tulos = kursori.fetchall()
    paluujson = jsonify(tulos)
    return paluujson

@app.route("/toimialat")
def toimialat():
    sql = "select nimi from toimiala;"
    kursori = yhteys.cursor()
    kursori.execute(sql)
    tulos = kursori.fetchall()
    paluujson = jsonify(tulos)
    return paluujson

yhteys = mysql.connector.connect(
    host="localhost",
    port=3306,
    database="hki",
    user="root",
    password="muumitalo",
)
if __name__ == "__main__":
    app.run(use_reloader=True, host="localhost", port=3000)