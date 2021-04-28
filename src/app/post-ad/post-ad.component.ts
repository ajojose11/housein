/* eslint-disable */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { APIService, CreateAdvertisementsInput } from '../services/API.service';
import { UserService } from '../services/user.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { Storage } from 'aws-amplify';
import awsconfig from '../../aws-exports';
@Component({
  selector: 'app-post-ad',
  templateUrl: './post-ad.component.html',
  styleUrls: ['./post-ad.component.scss'],
})
export class PostAdComponent implements OnInit, OnDestroy {
  category: any;
  mode: any;
  price: any;
  phone: any;
  title: any;
  country: any;
  state: any;
  city: any;
  countryList: any;
  stateList: any;
  cityList: any;
  description: any;
  userDetails: any;
  categoryID: any;
  modeID: any;
  subscrip: any;
  images: Array<any> = [];
  s3Image: Array<any> = [];
  // s3Object: Array<any> = [];
  constructor(
    private api: APIService,
    private data: DataService,
    private user: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user.currentUser().then((res) => {
      this.userDetails = res;
      this.api.GetUser(this.userDetails.username).then((value) => {
        if (value == null) {
          this.user.createUser(this.userDetails);
          this.userDetails.id = this.userDetails.username;
        } else this.userDetails = value;
      });
    });
    this.api.ListCategorys().then((res) => {
      this.category = res.items;
    });
    this.api.ListModes().then((res) => {
      this.mode = res.items;
    });
    this.data.getAccessToken().subscribe((res: any) => {
      this.data.header = {
        headers: new HttpHeaders({ Authorization: 'Bearer ' + res.auth_token }),
      };
      this.getCountry();
    });
  }
  getCountry() {
    this.data.getCountries().subscribe((res) => {
      this.countryList = res;
    });
  }
  getState(country: string) {
    this.data.getState(country).subscribe((res) => {
      this.stateList = res;
    });
  }
  getCity(state: string) {
    this.data.getCity(state).subscribe((res) => {
      this.cityList = res;
    });
  }
  onSubmit() {
    let query: CreateAdvertisementsInput = {
      userID: this.userDetails?.id,
      categoryID: this.categoryID,
      modeID: this.modeID,
      price: this.price,
      title: this.title,
      description: this.description,
      country: this.country,
      state: this.state,
      city: this.city,
      phone: this.phone,
      createdTime: new Date(),
    };
    this.api.CreateAdvertisements(query).then((res) => {
      this.uploadToStorage(res.id);
      this.router.navigate(['home']);
    });
  }
  onImageAdd(event: any) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        this.s3Image.push(event.target.files[i]);
        var reader = new FileReader();
        reader.onload = (pic: any) => {
          console.log(pic.target.result);
          this.images.push(pic.target.result);
        };
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  uploadToStorage(id: string) {
    this.s3Image.forEach((image) => {
      Storage.put(image.name, image).then((res) => {
        const s3Object = {
          name: image.name,
          adID: id,
          file: {
            bucket: awsconfig.aws_user_files_s3_bucket,
            region: awsconfig.aws_user_files_s3_bucket_region,
            key: image.name,
          },
        };
        this.uploadToDB(s3Object);
      });
    });
  }
  uploadToDB(s3Object: any) {
    this.api.CreatePicture(s3Object).then((res) => {
      console.log('image saved');
    });
  }
  ngOnDestroy() {
    // this.subscrip.unsubscribe();
  }
}
