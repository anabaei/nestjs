
## Debug

* Create container, run the app inside container using `.devcontainer` as 
```
- Reopen in container
- from predefine images
- select node or node postgres
- select ok
```
* `.devcontainer` created. It includes one json file which define docker compose. 


### Controller

* Controllers handle requests in our app. 
* Create Controller
```javascript
nest g co 
// -> coffees 
```
* It creates a `coffees` folder at src including test and contrller and import it to `app.module.ts` and added to `controllers` array
* if you don't want test file pass `no spec` as
```javascript
nest g co --no-spec
```
* 

### Github ssh

* It includes 3 steps
- create a key
- run ssh agent 
- make sure agent using the right key
```javascript
 ssh-keygen -t rsa -b 4096 -C "github-local-anyname" -f ~/.ssh/github-local-anyname

 eval "$(ssh-agent -s)"                
 ssh-add ~/.ssh/github-local-anyname
```


## Below are predefined commands
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```



