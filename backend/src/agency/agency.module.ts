import { Controller,Module } from "@nestjs/common";
import { AgencyController, AgencyControllerController } from "./agency.controller";
import { AgencyService} from "./agency.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AgencyEntity } from "./agency.entity";

@Module({
    imports:[TypeOrmModule.forFeature([AdminEntity])],
    controllers:[AgencyController],
providers:[AdminService]
})
export class agencyModule{}