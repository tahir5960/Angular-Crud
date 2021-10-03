
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../homecomponent.service';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  submitted: boolean;
  form = this.homeService.form;

  constructor(private homeService: HomeService) { }
  
  ngOnInit(): void {
  }

onSubmit(){
  if(this.homeService.form.valid){
    console.log("this.homeComponentService.form: ", this.homeService.form.value);
    this.homeService.addCompanyData(this.homeService.form.value);
    this.homeService.form.reset();
    
  } else {
    alert("Please enter valid data");
  }

}

}
