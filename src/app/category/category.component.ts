/* eslint-disable */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../services/API.service';
import { Storage } from 'aws-amplify';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  ads: any;
  constructor(
    private activatedroute: ActivatedRoute,
    private graphql: APIService
  ) {
    this.activatedroute.params.subscribe((data) => {
      let filter = { categoryID: { eq: data.param } };
      this.graphql.ListAdsHome(filter).then((res) => {
        this.ads = res.items;
        this.ads.forEach((ad: any) => {
          Storage.get(ad.images.items[0]?.file.key).then((res) => {
            ad.url = res;
          });
        });
      });
    });
  }

  ngOnInit(): void {}
}
