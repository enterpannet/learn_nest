import { BadRequestException, Controller, Get, HttpException, HttpStatus, Version } from '@nestjs/common';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';
@Controller({
    path: 'product',
    version: '5'
})
export class ProductController {
    constructor(
        private readonly utilityService: UtilityService,
        private readonly globalHelperService: GlobalHelperService,
    ) { }
    @Get('/date')
    getDate() {
        // throw new HttpException('ไม่พบข้อมูล', HttpStatus.BAD_REQUEST)
        return this.utilityService.getServerDate()
    }
    @Version('2')
    @Get('/dateth')
    getDateTH() {
        // throw new BadRequestException('หาข้อมูลไม่เจอ')
        return this.globalHelperService.getServerThaiDate()
    }
}
