/* eslint-disable */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { UserService } from '../services/user.service';
import { filter } from 'rxjs/operators';
import {
  Router,
  NavigationEnd,
  Event as NavigationEvent,
} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  signedIn = true;
  nav: any;
  currentRoute: any;
  constructor(private router: Router, private ref: ChangeDetectorRef) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEvent) => {
        this.nav = event;
        this.currentRoute = this.nav.urlAfterRedirects;
      });
  }

  ngOnInit(): void {
    // this.user.currentUserData.subscribe(value => {
    //   if (value) {
    //     this.signedIn = true;
    //   } else this.signedIn = false;
    //   this.ref.detectChanges()
    // })
  }

  public signOut() {
    // this.user.signOut();
  }
}
