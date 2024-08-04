FROM node:18

WORKDIR /usr/src/app

COPY . .

RUN npm install --production --ignore-scripts

RUN npm run build

CMD ["npm", "run", "start"]



