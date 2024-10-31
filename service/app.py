from flask import Flask, request, jsonify
from flask_cors import CORS
from elastic_index import Index
import os


# config = {
#     "url" : "sport-elastic",
#     "port" : "9200",
#     "doc_type" : "sport"
# }

app = Flask(__name__, static_folder='browser', static_url_path='')

CORS(app)

config = {
    "url" : os.getenv("ES_URI", "http://localhost"),
    "port" : os.getenv("ES_PORT ", "9200"),
    "doc_type" : "sport"
}


index = Index(config)

@app.after_request
def after_request(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
    return response

@app.route('/', methods=['GET', 'POST'])
@app.route('/colofon')
@app.route('/instellingen')
@app.route('/personsonen')
@app.route('/aanstellingen')
def catch_all():
    return app.send_static_file("index.html")

@app.route('/aanstelling_detail/<id>')
@app.route('/person_detail/<id>')
def detail(id):
    return app.send_static_file("index.html")

@app.route("/instelling_facet", methods=['POST', 'GET'])
def get_location_facet():
    struc = request.get_json()
    ret_struc = index.get_facet(struc["name"], struc["amount"], struc["filter"], struc["searchvalues"], "instelling")
    return jsonify(ret_struc)

@app.route("/person_facet", methods=['POST', 'GET'])
def get_person_facet():
    struc = request.get_json()
    ret_struc = index.get_facet(struc["name"], struc["amount"], struc["filter"], struc["searchvalues"], "persoon")
    return jsonify(ret_struc)

@app.route("/aanstelling_facet", methods=['POST', 'GET'])
def get_letter_facet():
    struc = request.get_json()
    ret_struc = index.get_facet(struc["name"], struc["amount"], struc["filter"], struc["searchvalues"], "aanstelling")
    return jsonify(ret_struc)

@app.route("/browse_instelling",  methods=['POST', 'GET'])
def browse_instelling():
    struc = request.get_json()
    ret_struc = index.browse_instelling(struc["page"], struc["page_length"], struc["searchvalues"])
    return jsonify(ret_struc)

@app.route("/browse_person",  methods=['POST', 'GET'])
def browse_persons():
    struc = request.get_json()
    ret_struc = index.browse_persons(struc["page"], struc["page_length"], struc["searchvalues"])
    return jsonify(ret_struc)

@app.route("/browse_aanstelling",  methods=['POST', 'GET'])
def browse_letters():
    struc = request.get_json()
    ret_struc = index.browse_aanstelling(struc["page"], struc["page_length"], struc["searchvalues"])
    return jsonify(ret_struc)

@app.route("/get_instelling_detail/<id>", methods=['GET'])
def get_location_detail(id):
    ret_struc = index.get_instelling_details(id)
    return jsonify(ret_struc)

@app.route("/get_person_detail/<id>", methods=['GET'])
def get_person_detail(id):
    ret_struc = index.get_person_details(id)
    return jsonify(ret_struc)

#Start main program

if __name__ == '__main__':
    app.run()

