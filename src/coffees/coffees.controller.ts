import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get() 
    anyName() {
        return 'this is first route'
    }
    @Get(':id') 
    anyName2(@Param('id') id: string) {
        return `this is ${id} `
    }
    @Post() 
    anyName3(@Body() body) {
        return body;
    }
}

