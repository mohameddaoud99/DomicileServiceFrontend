import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DemandeServiceService {

  private uri:String="http://localhost:8000/api/";
  constructor(private http:HttpClient ,private route:Router) { }

  DemandeService(data:any){
    return this.http.post(this.uri+"demanderService",data);
  }
}
