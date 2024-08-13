# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Bundle your app source code into the container
COPY . .

# Expose a port for your application to listen on (replace 3000 with your app's port)
EXPOSE 3003

# Define the command to run your application
CMD ["node", "app.js"]
