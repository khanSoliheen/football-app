import os
from flask import Flask, request, jsonify, abort
from .extensions import db, api
from .resources import ns
from flask_cors import CORS
def create_app(test_config=None, *args, **kwargs):
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///flaskr.sqlite"
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    api.init_app(app)
    api.add_namespace(ns)
    CORS(app, resources={r"/*": {"origins": "*"}})
    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass
    # a simple page that says hello
    return app


if __name__ == "flaskr":
    app = create_app()
