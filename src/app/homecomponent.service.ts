import { Injectable } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HomecomponentService {

  constructor() { }
  form = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('',Validators.email),
    designation: new FormControl(''),
    employeeNumber: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
}
