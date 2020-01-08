import { Injectable } from '@angular/core';
import { Omni } from "../models/Omni";

@Injectable({
  providedIn: 'root'
})
export class OmniService {

  omni:Omni;
  
  constructor() { 

  }
  dummy():Omni{
    return this.omni ={
      nameAnTimeArray:[]
    }
    
  }


  
}
