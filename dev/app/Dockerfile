FROM node:14.15.1-buster
RUN mkdir -p /app
# common install
RUN apt-get update -y  && apt-get -y upgrade

# nginx install
RUN apt-get install nginx -y
COPY /nginx/domain.conf /etc/nginx/conf.d/domain.conf
# supervisor install
EXPOSE 3000