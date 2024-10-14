import { Controller, Get, Render, Post, Body, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  /*
  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }
  */

@Get('mozi')
@Render('mozi')
submitMozi1() {return {error: []}}

@Post('mozi')
submitMozi2(@Body(ValidationPipe) moziData: any){

  const {name, email, datum, viewers} = moziData;
 

  if (!name || !email || !datum || !viewers) {
    return {error: 'Kérem töltse ki az összes mezőt!'}
  }

  const emailRegex = /^[a-zA-Z0-9]{1,}@[a-zA-Z0-9]{1,}\.[a-zA-Z0-9]{1,}$/;

  if (!emailRegex.test(email)) {
    return {error: 'Hibás email cím formátum!'}
  }


  const viewerregex = /^[1-9]|10$/
  if (!viewerregex.test(viewers) || viewers < 10 && viewers > 1) {
    
    return {error: 'Csak 1 és 10 közötti mennyiségű helyet lehet egyszerre foglalni!'}
  }


  return 'Mozi foglalása sikeresen megtörtént!'
}

}
