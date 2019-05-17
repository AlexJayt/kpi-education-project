import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../../../../servises/subjects.service';
import { Subject } from '../../../../models/subject';

@Component({
  selector: 'app-subjects-page',
  templateUrl: './subjects-page.component.html',
  styleUrls: ['./subjects-page.component.scss']
})
export class SubjectsPageComponent implements OnInit {

  subjects: Subject[];

  constructor(private subjectsService: SubjectsService) {
  }

  ngOnInit() {
    this.subjectsService.loadSubjects().subscribe(data => this.subjects = data);
  }

}
