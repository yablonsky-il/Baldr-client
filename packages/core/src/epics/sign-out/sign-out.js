import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import { signOut } from '../../actions/sign-out';
import { clearUserProfile } from '../../actions/profile';
import { API_PATH } from '../../constants';

export const signOutEpic = (action$, state$, { ajax }) => action$.pipe(
  ofType(signOut),
  switchMap(() => ajax({
    url: `${API_PATH}/sign-out`,
    method: 'POST',
  }).pipe(switchMap(() => of(clearUserProfile())))),
  catchError((err) => {
    console.log(err, 'cookieAuth error');

    return of(null);
  })
);
