
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomecomponentService } from '../homecomponent.service';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private homeComponentService: HomecomponentService) { }
 submitted: boolean;
 formControls = this.homeComponentService.form.controls;
  ngOnInit(): void {
  }

onSubmit(){
  this.submitted = true;
  if(this.homeComponentService.form.valid){
    this.submitted = false;
    
  }

}

}
