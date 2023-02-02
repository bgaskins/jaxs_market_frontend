import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  faBars = faBars;


  constructor() { }

  ngOnInit(): void {
  }


  toggleNavList(action: string) {// this function opening the side menu in the mobile screen

    action == 'open' ?
      document.querySelector('.nav-list')?.classList.add('active')
      : document.querySelector('.nav-list')?.classList.remove('active');

  }

}
