import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  personalInfo = 'I consider myself a responsible, compromised, and capable of learn easily, I can adapt to changes and I like\n' +
    '      the challenges. I have experience working on Html, css, javascript, basic on back end, I can work with front and\n' +
    '      back end frameworks, basic on NodeJs, and I know the Scrum methodology.';

  ngOnInit(): void {
  }

}
