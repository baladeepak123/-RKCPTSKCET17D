import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AjaxService {
  
  private baseUrl = "http://localhost:8081/";
constructor(private http: HttpClient) { }
// createNew(inputString1: string, url: string) {
//   //,inputString2: string,
//   alert("ajaxcalllll")
//   //  let paramInput = new HttpParams().set("reportCategoryName", inputString1);
//    //.set("reportName", inputString2)
//    let params = new HttpParams().set('reportCategoryName', inputString1);
//   // .set('reportName', inputString2);
//   return this.http.post(this.baseUrl + url,{params: params});

// }


createNew1(inputString1: string,inputString2: string,inputString3:string, url: string) {
  let params = new HttpParams().set('reportCategoryName', inputString1).set('reportName',inputString2).set('reportNumber',inputString3);
  return this.http.get(this.baseUrl + url, { params: params });
}


findAll(url: string) {
  
  return this.http.get(this.baseUrl + url);
}
}
