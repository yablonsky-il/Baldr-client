import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import { fetchAllUsers, setAllUsers } from '../../actions/fetch-all-users';
import { getUrlFetchAllUsers } from '../../api/api';

export const fetchAllUsersEpic = (action$, state$, { ajax }) => action$.pipe(
  ofType(fetchAllUsers),
  switchMap(() => ajax({
    url: getUrlFetchAllUsers(),
    method: 'GET',
  }).pipe(
    map(({ response: usersList }) => setAllUsers(usersList))
  )),
  catchError((err) => {
    console.log(err, 'err');

    return of(null);
  })
);
