import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import { cookieAuth } from '../../actions/cookie-auth';
import { setAuthenticationStatus } from '../../actions/sign-in';
import { setUserProfile } from '../../actions/profile';
import { SIGN_IN_STATUSES, API_PATH } from '../../constants';

export const cookieAuthEpic = (action$, state$, { ajax }) =>
  action$.pipe(
    ofType(cookieAuth),
    switchMap(() =>
      ajax({
        url: `${API_PATH}/cookie-auth`,
        method: 'POST',
      }).pipe(
        switchMap(({ response: { status, profile } }) =>
          status === SIGN_IN_STATUSES.SUCCESS
            ? of(setUserProfile(profile), setAuthenticationStatus({ status }))
            : of(setAuthenticationStatus({ status })))
      )),
    catchError((err) => {
      console.log(err, 'cookieAuth error');

      // return of(setAuthenticationStatus({ status: 1 }));
      return of(null);
    })
  );
