import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  imgStr = 'https://place-hold.it/25x25/ccc/666?text=1';

  imgTemplate = 'https://place-hold.it/25x25/ccc/666';
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() {}

  ngOnInit(): void { }

  setImgSrc(str: string): string {
    return this.imgTemplate + '?text=' + str;
  }
}
