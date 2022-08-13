import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {

  constructor() {
  }


  myStudies = ['Universidad Militar Nueva Granada', 'I.E.D. Ricardo Hinestrosa Daza La vega'];
  myImg = ['https://www.umng.edu.co/documents/20136/466691/Logo-UMNG.png', 'https://www.iedricardohinestrosadaza.edu.co/storage/iedricardohinestrosadaza.edu.co/escudo.png']
  myTitles = ['Multimedia Engineering', 'Technical Bachelor on Industrial Design'];
  myYears = ['Ended on June of 2022', 'Ended on December 2014'];

  ngOnInit(): void {
  }

}
