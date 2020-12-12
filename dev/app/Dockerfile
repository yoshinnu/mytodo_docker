FROM node:14.15.1-buster
RUN mkdir -p /var/www/app
# common install
RUN apt-get update -y  && apt-get -y upgrade

# nginx install
RUN apt-get install nginx vim -y
COPY nginx/domain.conf /etc/nginx/conf.d/domain.conf

# supervisor install
RUN apt-get update -y && apt-get install -y supervisor
RUN mkdir -p /var/log/supervisor
RUN groupadd nginx
RUN useradd -g nginx nginx
COPY supervisor/app.conf /etc/supervisor/conf.d/app.conf


EXPOSE 80
CMD ["/usr/bin/supervisord"]
