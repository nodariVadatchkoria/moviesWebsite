
import {
  HttpRequest, HttpHandlerFn, HttpHandler
} from '@angular/common/http';

import {environment} from "../../environments/environment";

/*@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

/!*apiKey: string = environment.api_key;*!/

/!*  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req.clone({
      setParams: {
        api_key: this.apiKey
      }
    }
    ));
  }*!/
}*/
export function ApiKeyInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn){
 const apiKey: string  = environment.api_key;

  return next(req.clone({
      setParams: {
        api_key: apiKey
      }
    }
  ));

}
