# pull the image 
FROM node:14-slim  
# create the directory or folder in os 
RUN mkdir /usr/src/app
# point OR refer to working directory 
WORKDIR /usr/src/app 
# copy package.json file in working directory 
COPY package.json /usr/src/app
# install all depencies in os image it will create node_module folder base upon dependencies provided in package.json file 
RUN npm install 
# copy app.js file in os image 
COPY app.js /usr/src/app
# run the application
CMD [ "node","app.js" ]

