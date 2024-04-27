FROM node:21.7.3
WORKDIR /app
COPY . /app 
RUN npm i
RUN npx turbo build
CMD ["npx", "turbo", "start"]
