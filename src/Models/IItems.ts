import { IUsers } from "../models/IUsers"
export interface IITem {
        id: Number,
        Title: string,
        Description: string,
        Price: number, 
        Photo: string,
        Date: string,
        fk_userId: number
}