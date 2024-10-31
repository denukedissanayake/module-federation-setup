# Dockerfile
# Use a Node.js image
FROM node:23-alpine

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock to install dependencies
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# # Build the application with Webpack (should match your Webpack configuration)
# RUN npm run build

# Expose the port that the app will run on
EXPOSE 3002

# Start the app with 'start' or 'serve' command if serving built files
CMD ["npm", "start"]
