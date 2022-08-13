import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expereince',
  templateUrl: './expereince.component.html',
  styleUrls: ['./expereince.component.scss']
})
export class ExpereinceComponent implements OnInit {

  constructor() { }

  myCompanies = ['Sofka University', 'CTU-Ideas','Connect Your Knowledge','Connect Your Knowledge'];
  myImg = ['https://ik.imagekit.io/lvh0tltbeph/SofkaU/logo-sofkau_1Fn3uH-1S.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645658493330',
    'http://www.ctu-ideas.com/presta/img/my-store-logo-1499372872.jpg',
    'https://www.cyk.com.co/wp-content/uploads/2019/06/CYK_Virtual_LM.jpg',
    'https://www.cyk.com.co/wp-content/uploads/2019/06/CYK_Virtual_LM.jpg']
  myTitles = ['Reserves level 1 and 2', 'Developer and designer','(intern) Leader of virtual content','Leader of virtual content'];
  myDuration = ['From May to June 2022', 'From February 2022 to May 2022','From February 2021 to November 2021','From July 2020 to January 2021'];
  myActivities = ['Pseint, Java, Spring boot, Html5, Css, Js, Angular, NodeJS Development',
    'Wix platform management, 2D web design, Photography',
    'Design, Web development, Virtual learning objects development, 3d design and 3d animation, advertising design for social media',
    'Design, Web development, Virtual learning objects development, 3d design and 3d animation, advertising design for social media'];

  ngOnInit(): void {
  }

}
