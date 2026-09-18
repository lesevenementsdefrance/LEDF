FROM nginx:alpine

COPY index.html styles.css app.js favicon.svg robots.txt /usr/share/nginx/html/

EXPOSE 80
