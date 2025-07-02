import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home.component',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    localStorage.setItem("token", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyM0BtYWlsLmNvbSIsIm5hbWUiOiJVc2VyIFRocmVlIiwiZXhwIjoxNzUxMzY1NTYzfQ.iXIIcfhA9koVU4HjPMCYApVVYGr7Ijt86v1M6aBWAN4');
  }
}
