# Use a lighter version of Node as a parent image
FROM node:carbon
# Set the working directory to /client
WORKDIR /usr/src/client
# copy package.json into the container at /client
COPY package*.json ./
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /client
COPY . .
# Run the app when the container launches
CMD ["npm", "start"]