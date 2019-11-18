import { empty, Subject, Subscriber } from 'rxjs';
import { ActionsObservable } from 'redux-observable';

const endAction = { type: 'EPIC_END' };

/**
 * Partial fork of https://github.com/BerkeleyTrue/react-redux-epic/
 */
export function wrapRootEpic(userEpic) {
  let actionsProxy = new Subject();
  let lifecycle = empty();
  let subscription;

  function observableEpic(_actions, ...rest) {
    actionsProxy = new Subject();
    subscription = new Subscriber();
    lifecycle = new Subject();

    const results = new Subject();
    const actions = new ActionsObservable(actionsProxy);
    const actionsSubscription = _actions.subscribe(actionsProxy);
    const epicsSubscription = userEpic(actions, ...rest)
      .subscribe(
        action => results.next(action),
        err => results.error(err),
        () => {
          lifecycle.complete();
          results.complete();
        }
      );

    subscription.add(epicsSubscription);
    subscription.add(actionsSubscription);

    return results;
  }

  // private methods/properties
  // used internally by render-to-string
  observableEpic.isWrapped = true;
  observableEpic.getObservable = () => lifecycle;

  observableEpic.complete = () => {
    actionsProxy.next(endAction);
    actionsProxy.complete();
  };

  observableEpic.unsubscribe = () => {
    lifecycle.unsubscribe();
    subscription.unsubscribe();
    actionsProxy.unsubscribe();
  };

  return observableEpic;
}
