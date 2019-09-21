import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import { sendAuthenticationData, setAuthenticationStatus } from '../../actions/sign-in';
import { setUserProfile } from '../../actions/profile';
import { SIGN_IN_STATUSES } from '../../constants';

export const signInEpic = (action$, state$, { ajax }) =>
  action$.pipe(
    ofType(sendAuthenticationData),
    switchMap(({ payload: formData }) =>
      ajax({
        url: '/api/sign-in',
        method: 'POST',
        body: formData,
      }).pipe(
        switchMap(({ response: { status, message, profile } }) =>
          status === SIGN_IN_STATUSES.SUCCESS
            ? of(setUserProfile(profile), setAuthenticationStatus({ status, message }))
            : of(setAuthenticationStatus({ status, message })))
      )),
    catchError((err) => {
      console.log(err, 'err authentication');

      return of(null);
    })
  );
