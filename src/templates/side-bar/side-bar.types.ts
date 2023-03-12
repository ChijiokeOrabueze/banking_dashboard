import { PageNumbers } from "../../context/CurrentPageContext"


export type MenuItems = {
    menuItem: string, 
    icon:string, 
    additionalInfo?:number | string, 
    pageNum:PageNumbers
}