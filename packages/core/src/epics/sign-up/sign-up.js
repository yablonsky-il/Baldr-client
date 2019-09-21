import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import { sendRegistrationData, setRegistrationStatus } from '../../actions/sign-up';
import { setUserProfile } from '../../actions/profile';
import { SIGN_UP_STATUSES } from '../../constants';

// {
//   url: 'https://httpbin.org/post',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'x-rxjs-is': 'Awesome!'
//   },
//   body: {
//     hello: 'World!',
//   }
// }

export const signUpEpic = (action$, state$, { ajax }) =>
  action$.pipe(
    ofType(sendRegistrationData),
    switchMap(({ payload: formData }) =>
      ajax({
        url: '/api/sign-up',
        method: 'POST',
        body: formData,
      }).pipe(
        switchMap(({ response: { status, message, profile } }) =>
          status === SIGN_UP_STATUSES.SUCCESS
            ? of(setUserProfile(profile), setRegistrationStatus({ status, message }))
            : of(setRegistrationStatus({ status, message })))
      )),
    catchError((err) => {
      console.log(err, 'registration error');

      return of(null);
    })
  );
