/* eslint-disable */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../services/API.service';
import { Storage } from 'aws-amplify';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  ads: any;
  noResults = false;
  constructor(
    private activatedroute: ActivatedRoute,
    private graphql: APIService
  ) {
    this.activatedroute.params.subscribe((data) => {
      let filter = { searchField: { contains: data.param.toLowerCase() } };
      // let filter = { title: { contains: data.param.toLowerCase() } };
      this.graphql.ListAdsHome(filter).then((res) => {
        this.ads = res.items;
        if (this.ads?.length == 0) {
          this.noResults = true;
        }
        if (this.ads?.images?.items?.length) {
          this.ads.forEach((ad: any) => {
            Storage.get(ad.images.items[0]?.file.key).then((res) => {
              ad.url = res;
            });
          });
        }
      });
    });
  }
  ngOnInit(): void {}
}
