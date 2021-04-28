/* eslint-disable */
import { Injectable } from '@angular/core';
import Auth from '@aws-amplify/auth';
import { NgZone, ApplicationRef } from '@angular/core';
import { Hub } from 'aws-amplify';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
import awsconfig1 from '../../aws-exports-api';
import { APIService } from '../services/API.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = Auth;
  userDetails: any;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUserData: Observable<any>;
  constructor(
    private router: Router,
    private ngzone: NgZone,
    private data: DataService,
    private ref: ApplicationRef,
    private api: APIService
  ) {
    this.currentUserSubject = new BehaviorSubject(null);
    this.currentUserData = this.currentUserSubject.asObservable();
    this.storeUser();
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signIn':
          console.log('user signed in');
          this.storeUser();
          this.ngzone.run(() => router.navigate(['/home']));
          break;
        case 'signUp':
          console.log('user signed up');
          // this.createUser(data);
          break;
      }
    });
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }
  public currentUser() {
    return this.user.currentAuthenticatedUser().then((res) => {
      console.log(res);
      return res;
    });
  }
  public storeUser(): any {
    this.user.currentAuthenticatedUser().then(
      (user) => {
        Amplify.configure(awsconfig);
        this.currentUserSubject.next(user);
        this.data.initial(user);
        this.ref.tick();
      },
      (error) => {
        console.log(error);
        Amplify.configure(awsconfig1);
        this.currentUserSubject.next(undefined);
        this.data.initial(undefined);
      }
    );
  }
  public createUser(data: any) {
    const query = {
      id: data.username,
      email: data.attributes.email,
      phone: data.attributes.phone_number,
    };
    console.log(data);
    this.api.CreateUser(query).then((res) => {
      console.log('user created');
    });
  }
  public signOut() {
    try {
      this.user.signOut().then((res) => {
        console.log('logged out');
        Amplify.configure(awsconfig1);
        this.currentUserSubject.next(undefined);
        this.data.initial(undefined);
        this.ref.tick();
        //  window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  }
}
