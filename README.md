# FACESLOG.COM

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
