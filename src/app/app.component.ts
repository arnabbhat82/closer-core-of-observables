import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userActivated = false;
  constructor(
    private router: Router,
    private userService: UserServiceService,
  ) {}
  title = 'closer-core-of-observables';
  ngOnInit() {
    this.userService.activatedEmitter.subscribe(data => {
      this.userActivated = data;
    });
  }
  goToParent() {
    this.router.navigate(['parent']);
  }
}
