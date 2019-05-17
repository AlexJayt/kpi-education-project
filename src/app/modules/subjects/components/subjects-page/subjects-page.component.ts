import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../../../../servises/subjects.service';

@Component({
  selector: 'app-subjects-page',
  templateUrl: './subjects-page.component.html',
  styleUrls: ['./subjects-page.component.scss']
})
export class SubjectsPageComponent implements OnInit {

  subjects: any[];

  constructor(private subjectsService: SubjectsService) {
  }

  ngOnInit() {
  }

}
