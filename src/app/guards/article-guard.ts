import { CanActivateFn } from '@angular/router';

export const articleGuard: CanActivateFn = (route, state) => {
  return true;
};
