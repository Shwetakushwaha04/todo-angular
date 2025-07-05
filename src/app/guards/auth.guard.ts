import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

import { AuthService } from "../services/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
    if (inject(AuthService).isAuthenticated()) {
        return true
    } else {
        return inject(Router).createUrlTree(['/login'])
    }
}

export const logGuard: CanActivateFn = (route, state) => {
    if (inject(AuthService).isAuthenticated()) {
        return inject(Router).createUrlTree(['/home'])
    } else {
        return true
    }
}
