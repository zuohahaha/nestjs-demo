import { Controller, Get, Render } from '@nestjs/common';
import { UserService } from './user.service'
@Controller('user')
export class UserController {
  constructor(private userServices: UserService) { }
  @Get()
  index(): string {
    return '用户首页';
  }
  @Get('add')
  add(): string {
    return '用户新增';
  }
  @Get('list')
  @Render('index')
  async list() {
    let result = await this.userServices.findAll();
    console.log(result);
    return { data: result }
  }
}
