import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth.service'

@Injectable()//This must be here, if we want to inject authService!
export class LoggedInGuard implements CanActivate{

    // prosledjen autenitfikacioni servis
    constructor(private authService: AuthService){
    }

    /// metoda vraca boolean ili Observable ili Promise
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.isLoggedIn(); // vrsi proveru da li je logovan i vraca true (sme da ode na protecte) ili false (ne sme da ode na protected)
    }


}
