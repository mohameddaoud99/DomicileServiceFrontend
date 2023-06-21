import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

   private uri:String="http://localhost:8000/api/";
   constructor(private http:HttpClient ,private route:Router) { }
 
   register(data:any){
     return this.http.post(this.uri+"inscrit",data);
   }


   login(log:any)
   {
     return this.http.get(this.uri + 'login/' + log.email + '/' + log.password);
   }
}
