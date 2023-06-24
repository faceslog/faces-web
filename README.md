# OLD WEBSITE HOME MADE - FACESLOG.COM

Due to numerous breaking changes and the occurrence of CVEs, I made the decision to discontinue support for my previous website built on Nuxt JS 2. Additionally, certain plugins, such as hCaptcha, were incompatible with Nuxt 3. While I could have switched to Vue itself, I found other projects that were more compelling and decided to adopt Ghost as my primary website platform to spare some time.

## Without docker:

Create a file `.env` a the root of the directory and use the same settings as `.env.sample`
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build

# Then Start Website 
$ npm run start

# Or to use a screen
$ bash website.sh [start|stop|restart|status]
```

# DOCKER

```bash
# Go to directory where the Dockerfile is
# Build image
$ docker build -t faces-web .
```
