from flask_restx import fields
from .extensions import api

area = api.model('Area', {
    'id': fields.Integer,
    'name': fields.String,
    'country_code': fields.String
})

competition = api.model('Competition', {
    'id': fields.Integer,
    'name': fields.String,
    'area_id': fields.Integer
})

team = api.model('Team', {
    'id': fields.Integer,
    'name': fields.String,
    'area_id': fields.Integer,
    'competition_id': fields.Integer
})

player = api.model('Player', {
    'id': fields.Integer,
    'name': fields.String,
    'team_id': fields.Integer,
    'position': fields.String
})

match = api.model('Match', {
    'id': fields.Integer,
    'home_team_id': fields.Integer,
    'away_team_id': fields.Integer,
    'competition_id': fields.Integer,
    'date': fields.DateTime,
    'status': fields.String
})


