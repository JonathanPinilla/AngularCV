import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-references',
  templateUrl: './personal-references.component.html',
  styleUrls: ['./personal-references.component.scss']
})
export class PersonalReferencesComponent implements OnInit {

  constructor() { }

  personalNames = ['Elizabeth Garzón', 'Catalina Ropero', 'Laura Cortés'];
  personalRelation = ['Teacher at Universidad Militar Nueva Granada, student counselor, Multimedia engineer',
    'Manager at Connect your Knowledge',
    'Teacher at Universidad Militar Nueva Granada, program director of Multimedia Engineering at Universidad Militar Nueva Granada'];
  personalNumber = ['3123095211', '3002888256', '3202980225'];

  ngOnInit(): void {
  }

}
