import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  footerData = [
    { title: 'COMPANY', body: ['About', 'Jobs', 'For the Record'] },
    {
      title: 'COMMUNITIES',
      body: [
        'For Artists',
        'Developers',
        'Advertising',
        'Investors',
        'Vendors',
      ],
    },
    {
      title: 'USEFUL LINKS',
      body: ['Support', 'Web Player', 'Free Mobile App'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
