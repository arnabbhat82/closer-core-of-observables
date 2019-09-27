import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor(private userService: UserServiceService) {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    // tslint:disable-next-line: deprecation
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater 3!'));
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable
      .pipe(
        filter(data => {
          return data > 0;
        }),
        map((data: number) => {
          return 'Round ' + (data + 1);
        }),
      )
      .subscribe(data => {
        console.log(data);
      });
  }
  onActivate() {
    this.userService.activatedEmitter.emit(true);
  }
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
