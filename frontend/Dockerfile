FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

RUN npm install

# Copy the rest of the application
COPY . .

EXPOSE 5173

CMD ["npm", "start"]
