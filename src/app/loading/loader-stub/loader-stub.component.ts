import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-stub',
  templateUrl: './loader-stub.component.html',
  styleUrls: ['./loader-stub.component.scss'],
})
export class LoaderStubComponent implements OnInit {

  @Input() loading = false;
  @Input() height = '300px';

  constructor() {
  }

  ngOnInit() {
  }

}
