from flask import Flask
from flask import jsonify
from flask_cors import CORS
app = Flask(__name__)


@app.route('/todo/getall',methods=['GET'])
def getTasks():
    return jsonify([
   { "complete": "false", "task": "Read about MongoDb" },
   { "complete": "false", "task": "Create a React ToDo App" },
   { "complete": "false", "task": "Find my key" }
 ])

@app.route('/todo/create',methods=['POST'])
def createTask():
    # Get item from the POST body
    print("chegou")
    return jsonify("python")

@app.route('/todo/update',methods=['UPDATE'])
def updateTask():
    return 'Update Task'

@app.route('/todo/delete',methods=['DELETE'])
def deleteTask():
    return 'Delete task'

if __name__ == "__main__":
    app.run(debug=True)
 