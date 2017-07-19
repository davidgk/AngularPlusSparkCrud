import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class PartnerService {

  private url: string = "http://localhost:8090/partner";


  constructor(private http: Http) { }

  getPartners(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  deletePartner(id){
    return this.http.delete(this.getPartnerUrl(id))
      .map(res => res.json());
  }

  private getPartnerUrl(id){
    return this.url + "/" + id;
  }

}





