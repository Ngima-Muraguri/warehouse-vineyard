import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public profile: any;
  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.api.getProfile().subscribe((res) => {
      this.profile = res;
    });
  }
}
