from flask import Flask
from flask import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources=r'*')

@app.route("/")
def helloWorld():
  print("GET")
  return "Hello, cross-origin-world!"

@app.route("/create", methods=['POST'])
def getInfo():
    print("POST CARALHO")
    if not request.json or not 'title' in request.json:
        print("NOPE")
    return request.json['title']    

if __name__ == "__main__":
  app.run(debug=True)