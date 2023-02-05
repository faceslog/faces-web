FROM node:16.19.0-alpine

# Create app directory
RUN mkdir -p /usr/src/faces-webpage/
WORKDIR /usr/src/faces-webpage

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# Install app dependencies
COPY . /usr/src/faces-webpage/
RUN npm install
RUN npm run build

EXPOSE 3000

# =======================
# ENVIRONMENT VARIABLES
# =======================
ENV PORT=3000
ENV HOST=0.0.0.0
# Uncomment this line in production and put the address of your website
# It will be needed to make post request from client side or it will try to post request on localhost of the client
ENV BROWSER_BASE_URL="https://your.website.address"
# BOOKSTACK
ENV BOOKSTACK_KEY=""
ENV BOOKSTACK_API=""
ENV BOOKSTACK_URL=""
# CAPTCHA SETTINGS
ENV HCAPTCHA_SITE_KEY=""
ENV HCAPTCHA_SECRET_KEY=""
# MAIL CONTACT FORM
ENV MAIL_HOST="mail.domain.tld"
ENV MAIL_PORT=587
ENV MAIL_USER="myuser@domain.tld"
ENV MAIL_PASSWORD="user_password"
ENV MAIL_FROM="noreply@domain.tld"
ENV MAIL_TO="contact@domain.tld"
# UMAMI Analytics
ENV UMAMI_ENABLE=false
ENV UMAMI_DOMAINS=mywebsite.com
ENV UMAMI_WEBID=your-website-id
ENV UMAMI_SCRIPTURL=https://path.to.umami.js


CMD [ "npm", "start" ]
