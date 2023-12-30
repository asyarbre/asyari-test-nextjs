FROM node:20.10.0

WORKDIR /usr/src/app

COPY package*.json ./

ENV NEXT_PUBLIC_API_URL=https://book-crud-service-6dmqxfovfq-et.a.run.app/api

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
