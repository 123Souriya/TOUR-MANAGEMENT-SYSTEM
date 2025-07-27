import { Column, Entity, PrimaryColumn } from "typeorm";
import { AgencyData } from "./agency.dto";

@Entity('Agency')
export class AgencyEntity{
    save(AgencyData: AgencyData) {
        throw new Error("Method not implemented.");
    }
         @PrimaryColumn({name:'ID'})
         id:number;
         @Column({name:'Name'})
         name:string;
         @Column({name:'UserName'})
         uname:string;
         @Column({name:'Password'})
         pass:string;
         @Column({name:'Address'})
         add:string;
        @Column({name:'Dp'})
         photo:string;
