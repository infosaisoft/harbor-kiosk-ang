import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HospitalService } from './hospital.service';

@Component({
  selector: 'app-hospital-registration',
  templateUrl: './hospital-registration.component.html',
  styleUrls: ['./hospital-registration.component.css'],
  providers: [HospitalService]
})
export class HospitalRegistrationComponent implements OnInit {

  hospitalForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private hospitalService: HospitalService) {
    this.hospitalForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'address': ['', Validators.required],
      'phNumber': ['', Validators.required],
      'hospitalLogo': ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.hospitalForm.value);
    this.hospitalService.registerHospital(this.hospitalForm.value)
      .subscribe((data:any) => {
          console.log(JSON.stringify(data));
          console.log("Hospital registration Successfull!");
         },error => {
            console.log("Hospital Registration Failed!");
            console.log(error);
        }        
      );
  }

}
