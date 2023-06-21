import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReparateurService {

  private uri:String="http://localhost:8000/api/";
  constructor(private http:HttpClient ,private route:Router) { }

  getAllTypesServices(){
    return this.http.get(this.uri+"getAllReparateur");
  }

  getReparateurByService(id:any) {
    return this.http.get(this.uri+"getReparateurWithEvaluationByService/"+id);
  }

  getReparateurByID(id:any) {
    return this.http.get(this.uri+"getReparateurByID/"+id);
  }
  getRepByVille(TypeServiceID:any,ville:any) {
    return this.http.get(this.uri+"getReparateurByServiceAndVille/"+TypeServiceID+"/"+ville);
  }
}
