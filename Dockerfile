FROM 

WORKDIR 

RUN npm install -g typescript

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4040 5550

#Build to project
RUN npm run build

# Run node server
CMD npm run start