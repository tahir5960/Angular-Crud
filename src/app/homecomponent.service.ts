import { Injectable } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  public form = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('',Validators.email),
    designation: new FormControl(''),
    employeeNumber: new FormControl('', [Validators.required]),
  });

  private companyDataSource = new BehaviorSubject([]);
  public companyData$ = this.companyDataSource.asObservable();

  public addCompanyData(company: any) {
    let companyData = this.companyDataSource.getValue();
    companyData.push(company);
    this.companyDataSource.next(companyData);
  }
}
