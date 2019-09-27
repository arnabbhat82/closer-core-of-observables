import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  activatedEmitter = new EventEmitter<boolean>();

  constructor() {}
}
