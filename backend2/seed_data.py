from flaskr.models import db, Area, Competition, Team, Player, Match
from flaskr import create_app  # Import your app factory function
from datetime import datetime

# Create app context
app = create_app()
with app.app_context():
    # Insert Areas
    areas = [
        Area(name="England", country_code="ENG"),
        Area(name="Spain", country_code="ESP"),
        Area(name="Germany", country_code="GER")
    ]
    db.session.add_all(areas)
    
    # Insert Competitions
    competitions = [
        Competition(name="Premier League", area_id=1),
        Competition(name="La Liga", area_id=2),
        Competition(name="Bundesliga", area_id=3)
    ]
    db.session.add_all(competitions)

    # Insert Teams
    teams = [
        Team(name="Manchester United", area_id=1, competition_id=1),
        Team(name="Real Madrid", area_id=2, competition_id=2),
        Team(name="Bayern Munich", area_id=3, competition_id=3)
    ]
    db.session.add_all(teams)

    # Insert Players
    players = [
        Player(name="Bruno Fernandes", team_id=1, position="Midfielder"),
        Player(name="Karim Benzema", team_id=2, position="Forward"),
        Player(name="Joshua Kimmich", team_id=3, position="Midfielder")
    ]
    db.session.add_all(players)

    # Insert Matches
    matches = [
        Match(home_team_id=1, away_team_id=2, competition_id=1, date=datetime(2025, 4, 1), status="UPCOMING"),
        Match(home_team_id=2, away_team_id=3, competition_id=2, date=datetime(2025, 4, 2), status="UPCOMING"),
        Match(home_team_id=2, away_team_id=3, competition_id=2, date=datetime(2025, 4, 2), status="UPCOMING"),
        Match(home_team_id=2, away_team_id=3, competition_id=2, date=datetime(2025, 1, 2), status="COMPLETED"),
        Match(home_team_id=3, away_team_id=1, competition_id=3, date=datetime(2025, 4, 3), status="UPCOMING")
    ]
    db.session.add_all(matches)

    # Commit to database
    db.session.commit()
    print("Data inserted successfully!")
