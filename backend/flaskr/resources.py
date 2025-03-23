from flask_restx import Resource, Namespace
from flask import request
from .models import Area, Competition, Team, Player, Match
from .api_models import area, competition, team, player, match
from datetime import datetime


ns = Namespace('api', description='API')

@ns.route('/areas')
class GetArea(Resource):
    @ns.marshal_list_with(area)
    def get(self):
        return Area.query.all()
    
@ns.route('/competitions')
class GetCompetition(Resource):
    @ns.marshal_list_with(competition)
    def get(self):
        name = request.args.get('name')
        area = request.args.get('area')
        if name:
            return Competition.query.filter(Competition.name.ilike(f"%{name}%")).all()
        if area:
            return Competition.query.filter(Competition.area_id == area).all()
        return Competition.query.all()
    
@ns.route('/teams')
class GetTeam(Resource):
    @ns.marshal_list_with(team)
    def get(self):
        name = request.args.get('name')
        if name:
            return Team.query.filter(Team.name.ilike(f"%{name}%")).all()
        return Team.query.all()
    
@ns.route('/players')
class GetPlayer(Resource):
    @ns.marshal_list_with(player)
    def get(self):
        name = request.args.get('name')
        if name:
            return Player.query.filter(Player.name.ilike(f"%{name}%")).all()
        return Player.query.all()
    
@ns.route('/player/<int:id>')
class GetPlayer(Resource):
    @ns.marshal_list_with(player)
    def get(self, id):
        return Player.query.get(id)
class GetPlayer(Resource):
    @ns.marshal_list_with(player)
    def get(self):
        return Player.query.all()
    
@ns.route('/matches')
class GetMatch(Resource):
    @ns.marshal_list_with(match)
    def get(self):
        status = request.args.get('status')
        if status:
            return Match.query.filter(Match.status.ilike(f"%{status}%")).all()
        return Match.query.all()
    
