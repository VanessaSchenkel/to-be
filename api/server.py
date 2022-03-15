from flask import Flask, jsonify, request, json
from flask_cors import CORS, cross_origin
from googletrans import Translator

app = Flask(__name__)
CORS(app)


textToTranslate = ""
textTranslated = ""
translator = Translator()

def translation(textToTranslate):
    return translator.translate(textToTranslate, src="en", dest="pt").text


@app.route("/", methods=["GET", "OPTIONS"])
@cross_origin()
def helloWorld():
    response = jsonify(message="Simple server is running")
    return response

@app.route("/create", methods=["POST" , "OPTIONS"])
@cross_origin()
def getInfo():
    data = json.loads(request.data)
    textToTranslate = data["text"]
    textTranslated = translation(textToTranslate)
    print(textTranslated)
       
    return textTranslated

if __name__ == "__main__":
  app.run(host="localhost", port=5001, debug=True)