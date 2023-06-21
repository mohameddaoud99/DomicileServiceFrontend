import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandeurService {

  private uri:String="http://localhost:8000/api/";
  constructor(private http:HttpClient ,private route:Router) { }

  getAllServices(){
    return this.http.get(this.uri+"getAllServices");
  }
}
