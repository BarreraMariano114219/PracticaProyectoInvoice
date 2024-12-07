import { identifierName } from "@angular/compiler";
import { last } from "rxjs";
import { Company } from "../models/company";
import { Invoice } from "../models/invoice";

export const invoiceData :Invoice = {
    id:1,
    name:'Componentes de pc',
    client:{
        name:'Juan Pablo',
        lastName:'Gonzalez',
        address:{
            country:'Argentina',
            city:'Buenos Aires',
            street:'Av. Rivadavia',
            number:1234,
        },
    },
    company:{
        name:'Mi Empresa',
        fiscalNumber:2534,
    },
    items:[
        {
            id:1,
            product:'Motherboard',
            price:1000,
            quantity:1,

        },
        {
            id:2,
            product:'Teclado mecanico',
            price:300,
            quantity:2,

        },
        {
            id:3,
            product:'Monitor 24"',
            price:900,
            quantity:4,

        },
        {
            id:4,
            product:'Mouse inalambrico',
            price:150,
            quantity:1,

        }
    ],
    total:0
};