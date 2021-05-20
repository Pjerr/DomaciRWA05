import { Band } from "./band";

export interface Record{
    id:number,
    name:string,
    band:Band,
    yearOfRelease:number,
    cover:string
}