import {Inject, Injectable, Optional} from '@angular/core';
import {RESPONSE} from '@nguniversal/express-engine/tokens';
import type {Response} from 'express';
import type {ServerResponse} from 'http';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {

  constructor(
    @Optional() @Inject(RESPONSE) private response: Response,
  ) {
  }

  status(code: ServerResponse['statusCode']) {
    this.response?.status(code)
  }

}
