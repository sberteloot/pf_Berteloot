import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.isAdmin().pipe(
    map((isAdmin) => {
      if (isAdmin) return true;
      return router.createUrlTree(['/dashboard/home']);
    })
  );
};