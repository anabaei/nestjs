
## Debug

* Create container, run the app inside container using `.devcontainer` as 
```
- Reopen in container
- from predefine images
- select node or node postgres
- select ok
```
* `.devcontainer` created. It includes one json file which define docker compose. 

### Decorators
* Everything as `@` in nest is called decorator `@Get`, `@Controller` all imported from `nestjs/common` library
* 

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

## Routing
* The string inside @controler defines which `url` correspond to this controller, for example below route is `baseurl/coffess` 
```javascript
//GET:  baseUrl/coffees
@Controller('coffees')
export class CoffeesController {}
```
* Define an action as decorator and dedicate one function to it like 
```javascript
@Controller('coffees')
export class CoffeesController {
    @Get() 
    anyFunctionName() {
        return 'this is first route'
    }
}
```
* To add nestet url as `GET:  baseUrl/coffees/flavors` need to add string flavor as `@Get('flavors)`
* Dynamic route as `/coffees/32`

```javascript
@Get(':id') 
anyName2(@Param() params) {
    console.log(params) //{ id: '32' }
    return `this is #${params} `
}
// or we can have 
  @Get(':id') 
    anyName2(@Param('id') id: string) {
        return `this is ${id} `
    }
```
#### Post
* Import Post and Body decorators and use as 
```javascript
//POST: baseUrl/coffees

    @Post() 
     anyName3(@Body() body) {
        return body;
    }
    // if you return `${body}` you receive [object object]
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



