# Use a lightweight Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package files to install dependencies
COPY package*.json ./

# Install ALL dependencies from package.json
RUN npm install

# Install tailwindcss globally so npx can find it
RUN npm install -g tailwindcss live-server

# Copy the rest of the project files
COPY . .

# Build CSS once at build time
RUN npx tailwindcss -i ./style2.css -o ./output.css

# Expose the development server port
EXPOSE 3000

# Start live-server (CSS already built)
CMD ["live-server", "--port=3000"]