FROM node:22.2.0
WORKDIR /app
COPY . /app
RUN npm i
RUN npm run build
CMD ["npm", "run", "start"]