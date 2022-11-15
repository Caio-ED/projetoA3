import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const header = document.querySelector('.header') as HTMLElement | null;
    const nav = document.querySelector('.header__nav') as HTMLElement | null;
    const btnMobile = document.querySelector('.header__nav__btnMobile') as HTMLElement | null;
    const menuMobile = document.querySelector('.header__nav__menu') as HTMLElement | null;


    let sizeHeight = header.offsetHeight;
    menuMobile.style.top = `${sizeHeight}px`;


    btnMobile.addEventListener('click', () => {
      if (nav.classList.contains('active')) {
        nav.classList.remove('active')
      } else {
        nav.classList.add('active')
      }
    })
  }

}
