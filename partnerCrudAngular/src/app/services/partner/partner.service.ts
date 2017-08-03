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

  private getPartnerUrl(key){
    return this.url + "/" + key;
  }

  getPartner = (id) => {
    return this.http.get(this.getPartnerUrl(id))
      .map(res => res.json());
  }

  addPartner(partner){
  return this.http.post(this.url, JSON.stringify(partner))
    .map(res => res.json());
}

  updatePartner(partner){
    return this.http.put(this.getPartnerUrl(partner.partner_key), JSON.stringify(partner))
      .map(res => res.json());
  }

  getAllPartnerStatus() {
    return this.http.get(this.getPartnerStatusUrl())
      .map(res => res.json());
  }

  getPartnerStatusByKey(key: number) {
    return this.http.get(this.getPartnerStatusUrl() +"/"+key)
      .map(res => res.json());
  }

  private getPartnerStatusUrl() {
    return this.url + "/status"
  }

  getPartnerConfiguration= (key:number) => {
    return this.http.get(this.url+"/configuration/"+key)
      .map(res => {
        console.log(res);
        return res.json()
      });
  }

  getPartnersTypeBykey(key: number) {
    return this.http.get(this.getPartnerTypeUrl()+"/"+key)
      .map(res => {
        console.log(res);
        return res.json()
      });
  }
  getPartnersTypes(){
    return this.http.get(this.getPartnerTypeUrl())
      .map(res => res.json());
  }

  private getPartnerTypeUrl() {
    return this.url + "/type";
  }
}





