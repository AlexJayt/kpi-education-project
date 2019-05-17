import { Component, OnInit } from '@angular/core';
import { Lecture } from '../../../../models/lecture';
import { SubjectsService } from '../../../../servises/subjects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-details-page',
  templateUrl: './subject-details-page.component.html',
  styleUrls: ['./subject-details-page.component.scss']
})
export class SubjectDetailsPageComponent implements OnInit {

  lectures: Lecture[];

  constructor(private subjectsService: SubjectsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subjectsService.loadLectures(this.route.snapshot.params.id).subscribe(data => this.lectures = data);
  }

}
