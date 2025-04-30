# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install tailwind and live-server
COPY package*.json ./
RUN npm install -D tailwindcss && npm install -g live-server

# Copy the rest of the files (optional, since we'll mount volume)
COPY . .
EXPOSE 3000

# Start Tailwind watcher and live-server together
CMD sh -c "npm start & live-server --port=3000 --watch=index.html,output.css"
