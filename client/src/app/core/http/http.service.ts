import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

import { AppConfig } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
    withCredentials: true,
  };

  public handleError(err: any, showNotification = true) {
    if (showNotification) {
      // TODO: Implement error handling
    }

    return throwError(err);
  }

  public createApiUrl(path: string): string {
    return `${AppConfig.apiUrl}/${path}`;
  }
}
