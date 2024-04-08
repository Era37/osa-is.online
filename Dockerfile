FROM node:21.7.2
WORKDIR /app
COPY . /app 
RUN npm i
RUN npx prisma db push
RUN npx prisma generate
RUN npx turbo build
CMD ["npx", "turbo", "start"]
