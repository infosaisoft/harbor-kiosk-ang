import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import { PatientData } from "./patient-model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PatientService{

    private serviceUrl = 'http://localhost:1010/Harbor-Kiosk/patient-add';

    constructor(private _http: HttpClient){}

    registerPatient(patient: PatientData){
        console.log(patient);
        return this._http.post(this.serviceUrl, patient);
    }

}