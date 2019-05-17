import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-stub',
  templateUrl: './content-stub.component.html',
  styleUrls: ['./content-stub.component.scss'],
})
export class ContentStubComponent implements OnInit {

  @Input() height = '300px';

  constructor() { }

  ngOnInit() {
  }

  hasContent(nodes) {
    return Array.from(nodes).some((node: Node) => node.nodeName !== '#comment');
  }


}
