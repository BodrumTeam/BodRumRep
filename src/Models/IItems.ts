import {IUsers} from "../models/IUsers"
export interface IITem{
        id:Number;
        title:string,
        description:String,
        price:number , 
        photo:string,
        date:string,
        fk_userId:number;
}