import { Component, OnInit } from '@angular/core';

import { HomeService } from "../homecomponent.service";

@Component({
  selector: 'app-home-list',
  templateUrl: './home.component-list.component.html',
  styleUrls: ['./home.component-list.component.css']
})
export class HomeComponentListComponent implements OnInit {

  public companyData = [];
  constructor(private homeService: HomeService) { 
    this.homeService.companyData$.subscribe(data => this.companyData = data);
  }

  ngOnInit(): void {
  }

}
