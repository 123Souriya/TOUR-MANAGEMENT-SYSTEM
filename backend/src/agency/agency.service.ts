import { Injectable } from "@nestjs/common";
import { isArgumentsObject } from "util/types";
import { agencyData } from "./agency.dto";
import { AgencyEntity} from "./agency.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
@Injectable()
export class agencyService{
    constructor(@InjectRepository(AgencyEntity)private agencyRepository:Repository<AgencyEntity>){}
    
        getAgency():string{
        return "Hello Agency";
    }
    getAdminById(id:string):string{
        return "Agency Id" +id;
    }
    getPhoto():string{
        return "All photos added Post Method";
    }
    getPhotoById1(id:number):string{
        console.log(typeof(id));
        return "Photo id is(get)="+id;
    }
      getPhotoById2(id:number):string{
        return "Photo id is(post)="+id;
    }
    getAdminByNameAndId(name,id){
        console.log(typeof(id));
         console.log(typeof(name));
        return 'Agency Name:' + name + ', Agency id:' + id;
    }
    addAgency(agencydata:object){
        console.log(agencyData)
        return Agencydata;
    }
    addAdminDto(AgencyData:AgencyData): object{
        console.log(AgencyData.name);
        console.log(AgencyData.uname);
        console.log(AgencyData.fileName);
        this.AgencyRepository.save({
        id: AgencyData.id,
        name: AgencyData.name,
        uname: AgencyData.uname,
        pass: AgencyData.pass,
        add: AgencyData.add,
        photo: AgencyData.fileName, // Assigning fileName to photo column
    });
            return agencyDataData;
    }
   

}