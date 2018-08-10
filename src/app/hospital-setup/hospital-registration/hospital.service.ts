import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { HospitalData } from "./hospital.model";

@Injectable()
export class HospitalService{

    private serviceUrl = 'http://localhost:1010/Harbor-Kiosk/register-hospital';

    constructor(private _http: HttpClient){}

    registerHospital(hospital: HospitalData){
        console.log(hospital);
        return this._http.post(this.serviceUrl, hospital)
    }

}