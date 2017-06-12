import{IUsers}from '../models/IUsers'
export interface INeeds{
    id:number;
    description:string;
    date:string;
    fk_userId:number;
    users:IUsers

}