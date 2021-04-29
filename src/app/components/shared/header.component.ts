import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  mounted = true;
  docked = true;
  previousScroll = window.pageYOffset;

  ngOnInit(): void {
    window.onscroll = () => {
      const currentScroll = window.pageYOffset;
      this.mounted = this.previousScroll > currentScroll || currentScroll <= 0;
      this.docked = this.previousScroll < 50 || currentScroll <= 0;
      this.previousScroll = currentScroll;
    };
  }
}