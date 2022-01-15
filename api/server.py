from flask import Flask, request, abort
from flask_cors import CORS
from googletrans import Translator

app = Flask(__name__)
CORS(app, resources=r'*')

textToTranslate = ""
textTranslated = ""
translator = Translator()

def translation():
    return translator.translate('This is so nice', src="en", dest="pt").text

@app.route("/")
def helloWorld():
  return "Hello, cross-origin-world!"

@app.route("/create", methods=['POST'])
def getInfo():
    textToTranslate = request.json['text']
    textTranslated = translation()
    if not request.json or not 'text' in request.json:
        abort(400)
    return textTranslated    

if __name__ == "__main__":
  app.run(debug=True)