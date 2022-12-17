import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})
export class ReqresService {
    //Consumo de api reqres.in
    url = "https://reqres.in/api/users/";
    constructor(private http: HttpClient) {
    }
    getReqres(): Observable<any> {
        return this.http.get(this.url);
    }
}
