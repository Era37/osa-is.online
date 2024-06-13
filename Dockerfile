FROM node:22.2.0
RUN npm i
RUN npm run build
WORKDIR /app
COPY . /app
CMD ["npm", "run", "start"]
