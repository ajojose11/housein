/* eslint-disable */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../services/API.service';
import { Storage } from 'aws-amplify';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss'],
})
export class AdDetailsComponent implements OnInit {
  ad: any = { categoy: '' };
  constructor(
    private activatedroute: ActivatedRoute,
    private graphql: APIService,
    private router: Router
  ) {
    this.activatedroute.params.subscribe((data) => {
      this.graphql.GetAdvertisementsPic(data.id).then(
        (res) => {
          this.ad = res;
          this.ad.images?.items?.forEach((item: any) => {
            console.log(item);
            Storage.get(item.file?.key).then((res) => {
              console.log(res);
              item.url = res;
            });
          });
        },
        (error) => {
          this.router.navigate(['/home']);
        }
      );
    });
  }

  ngOnInit(): void {}
}
