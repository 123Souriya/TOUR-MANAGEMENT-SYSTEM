import { Controller, Get } from "@nestjs/common";
import { AgencyService } from "./agency.service";
 
@Controller('agency') // 'agency' is the route path
export class AgencyController {
    constructor(private readonly agencyService: AgencyService) {}
 
    @Get()
    getAgency(): string {
        return this.agencyService.getAgency();
    }
 
    
}
