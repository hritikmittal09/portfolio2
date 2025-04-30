# Use a lightweight Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package files to install dependencies
COPY package*.json ./

# Install TailwindCSS and live-server as dev dependencies
RUN npm install -D tailwindcss live-server

# Copy the rest of the project files
COPY . .

# Expose the development server port
EXPOSE 3000

# Start Tailwind watcher and live-server together
CMD sh -c "npm run start & npx live-server --port=3000 --watch=index.html,output.css"
