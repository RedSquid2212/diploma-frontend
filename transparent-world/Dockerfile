FROM node:20-alpine
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm install
COPY . .
ENV HOST=0.0.0.0
ENV PORT=4173
RUN npm run build
EXPOSE 4173
CMD [ "npm", "run", "preview" ]