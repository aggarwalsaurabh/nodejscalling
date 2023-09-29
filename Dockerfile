FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
RUN mkdir utils \
 && mkdir logs \
 && touch logs/out.log \
 && chmod 777 logs/out.log
COPY ./package*.json ./
COPY utils/logger.js ./utils/

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 80
CMD [ "node", "server.js" ]
