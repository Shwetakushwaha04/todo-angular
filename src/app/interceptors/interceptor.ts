import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, of, throwError } from "rxjs";
import { Router } from "@angular/router";

export const myInterceptor: HttpInterceptorFn = (req, next) => {

  const router = new Router();

  const token = localStorage.getItem("token");
  //TODO: check and control for which requests token should be injected
  if(token) {
    const newReq = req.clone({
      headers: req.headers.set(
        'Authorization', 'Bearer ' + token
      )
    });
    req = newReq
  }
  
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if(error.error instanceof ErrorEvent){}else{
        switch(error.status){
          case 401:
            router.navigateByUrl('/error/401')
            break;
        }
      }
      return throwError(()=> error)
    })
  );
}