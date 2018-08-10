import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PatientData } from './patient-model';
import { PatientService } from './patient-service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css'],
  providers:[PatientService]
})
export class PatientRegistrationComponent implements OnInit {

  patientForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private patientService: PatientService) { 

    this.patientForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'aadhar': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required,Validators.email])],
      'contact': ['', Validators.required],
    });

  }

  ngOnInit() {
  }

  onSubmit() {    
    console.log(this.patientForm.value);
    this.patientService.registerPatient(this.patientForm.value)
      .subscribe((data: any) => {
            console.log(JSON.stringify(data));
            console.log("Patient Registration Successfull!");
         },error => {
            console.log("Patient Registration Failed!");
         }
      );
  }

}
