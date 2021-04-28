/* eslint-disable */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { APIService } from '../services/API.service';
import { Router } from '@angular/router';
import { Storage } from 'aws-amplify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  userDetails: any;
  category: any;
  users: any;
  subscrip: any;
  ads: any;
  param: any;
  image: any;
  constructor(
    private data: DataService,
    private user: UserService,
    private api: APIService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userDetails = this.user.currentUserValue;
    this.api.ListCategoryID().then((res) => {
      this.category = res.items;
    });
    // this.api.ListUsers().then((res) => {
    //   this.users = res.items;
    // });
    this.api.ListAdsHome().then((res) => {
      this.ads = res.items;
      this.ads.forEach((ad: any) => {
        Storage.get(ad.images.items[0]?.file.key).then((res) => {
          ad.url = res;
        });
      });
    });
  }
  search() {
    this.router.navigate(['/search', this.param]);
  }
  goToCategory(item: any) {
    if (item.ads.items.length > 0) {
      this.router.navigate(['/category', item.id]);
    }
  }
  ngOnDestroy() {}
}
