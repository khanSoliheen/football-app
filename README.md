# 🏆 Football App

A full-stack football application with a **Flask backend** and **React frontend** using Docker, featuring team/player tracking and match management.

## 🚀 Features
- **Backend**: Flask REST API with Gunicorn
- **Frontend**: React 18 with Vite & Tailwind CSS
- **Database**: SQLite with persistent Docker storage
- **Containerized**: Full Docker & Docker Compose support
- **API Docs**: Integrated Swagger UI documentation

---

## 🖥 Pages Overview

### 1. **Teams Page**
- Browse all football teams
- Filter by competition/league
- View team details and squad members
- Responsive card layout with team logos

### 2. **Matches Page**
- View upcoming and completed matches
- Filter by date/team/status
- Interactive match cards with team lineups
- Live score updates (placeholder)

### 3. **Players Page**
- Search players by name/position
- View player profiles and stats
- Track player performance metrics
- Follow favorite players

### 4. **Areas Page**
- Explore football regions/countries
- View regional competitions
- Filter teams by geographical area
- Area-specific match schedules

### 5. **Player Details Page**
- View detailed player statistics
- Track performance over time
- Compare stats with other players

---

## 🛠 Tech Stack

**Backend**  
- `Python 3.11` | `Flask` | `SQLAlchemy` | `Swagger`

**Frontend**  
- `React 18` | `TypeScript` | `Vite` | `Tailwind CSS`

**Infrastructure**  
- `Docker` | `Docker Compose` | `Gunicorn` | `SQLite`

---

## 📋 Prerequisites

Ensure you have the following installed:  
- **Docker** (20.10+)
- **Docker Compose** (2.15+)
- **Node.js** (18+ for local frontend development)
- **Python** (3.11+ for local backend development)

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/khanSoliheen/football-app.git
cd football-app

# Start containers
docker-compose up --build -d
```

### 🌐 Access Services

- **Frontend:** [http://localhost:5173/competition](http://localhost:5173/competition) – Main application interface  
- **Backend API:** [http://localhost:3075](http://localhost:3075) – REST API endpoints  
- **Swagger Documentation:** [http://localhost:3075/api](http://localhost:3075/api) – Interactive API docs  

🔔 **Note:**  
If running in Docker, replace `localhost` with:  
- `0.0.0.0` if accessing from the host machine  
- The container IP if accessing from another network  

---