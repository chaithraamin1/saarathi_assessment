import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  listProducts:any=[]
  constructor() { }
  save(){
    
    this.listProducts.push();
    }
    }
    
    // deletelist(id:number){
    // const i=this.listProducts.findIndex(e=>e.id===id);
    // if(i !== -1){
    // this.listProducts.splice(i,1);
    // }
//     }
// }
