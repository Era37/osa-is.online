FROM node:23.0.0
WORKDIR /app
COPY . /app
RUN npm i
RUN npm run build
CMD ["npm", "run", "start"]
