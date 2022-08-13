import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-references',
  templateUrl: './family-references.component.html',
  styleUrls: ['./family-references.component.scss']
})
export class FamilyReferencesComponent implements OnInit {

  constructor() { }

  familyNames = ['Sandra Forero', 'Pedro Pinilla', 'Amanda Medellin'];
  familyRelation = ['Mother', 'Father', 'Grand Mother'];
  familyNumber = ['3144547050', '3115067582', '3107616933'];

  ngOnInit(): void {
  }

}
