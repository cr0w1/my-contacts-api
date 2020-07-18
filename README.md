# Low data API with Nodejs
API developed to be consumed with the application ***[My contacts]( https://github.com/cr0w1/my-contacts)***, application in ***[React Native](https://reactnative.dev/)*** + ***[Expo](https://expo.io/)***.
 
### Requirements
  - [Nodejs](https://nodejs.org/en/)
  - [npm](https://www.npmjs.com/get-npm)

### Used librariesused 
- [Express](https://expressjs.com/pt-br/)
- [Morgan]()
- [Lowdb](https://github.com/typicode/lowdb)
- [uuid](https://www.npmjs.com/package/uuid)
- [Bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [Multer](https://www.npmjs.com/package/multer)

### How to use
Download the api.

```bash
    $ git clone https://github.com/cr0w1/my-contacts-api.git

```

Inside the folder we downloaded open a console and run the command below to download all the dependencies that the api needs to run.

```bash
    $ npm intall -D
```


To start the server, just turn the command down. there are two different commands, ***dev*** and ***start***, where the ***dev*** command ***start*** the application in development mode and ***start*** in production mode.

```bash
    # development mode
    $ npm run dev 

    # production mode
    $ npm run start 
```