import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from './user-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub: Subscription;
  constructor(
    private router: Router,
    private userService: UserServiceService,
  ) {}
  title = 'closer-core-of-observables';
  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(data => {
      this.userActivated = data;
    });
  }
  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }
  goToParent() {
    this.router.navigate(['parent']);
  }
}
