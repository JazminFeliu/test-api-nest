import { Controller, Get } from '@nestjs/common';

@Controller('test-api')
export class TestApiController {

    @Get()
    getTestApi(){
        return "Hola desde la api nest!";
    }
}
