import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-loader',
  templateUrl: './round-loader.component.html',
  styleUrls: ['./round-loader.component.scss'],
})
export class RoundLoaderComponent implements OnInit {

  @Input() loading: boolean;
  @Input() topOffset = '0';
  @Input() diameter = 75;
  @Input() strokeWidth = 5;
  @Input() wrapperClass = '';

  constructor() {
  }

  ngOnInit() {
  }

}
