import {Injectable} from '@angular/core';
import type {CanActivate} from '@angular/router';
import {ResponseService} from '../services/response.service';

@Injectable({
  providedIn: 'root',
})
export class NotFoundGuard implements CanActivate {
  constructor(private response: ResponseService) {
  }

  canActivate(): true {
    this.response.status(404);
    return true;
  }

}
