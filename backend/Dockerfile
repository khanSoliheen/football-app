FROM python:3.11-slim

# Set working directory
WORKDIR /usr/src/app

# Copy requirements first for better caching
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Create instance directory for SQLite (ensure it's writable)
RUN mkdir -p /usr/src/app/instance && chmod 777 /usr/src/app/instance

# Copy application code
COPY . .

# Set environment variables
ENV FLASK_APP=flaskr:create_app
ENV FLASK_ENV=production
ENV DATABASE_URL=sqlite:////usr/src/app/instance/flaskr.sqlite

# Expose port
EXPOSE 3075

# Ensure instance directory is persisted
VOLUME /usr/src/app/instance

# Start Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:3075", "--workers", "2", "flaskr.wsgi:app"]



