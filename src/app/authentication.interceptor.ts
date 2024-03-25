import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addAuthenticationHeader(request));
  }

  addAuthenticationHeader(request: HttpRequest<unknown>) {
     const modifiedRequest = request.clone({
      setHeaders: {
        'Authorization': 'Basic YWRtaW46YWRtaW4='
      }
    });

    return modifiedRequest;
  }
}
