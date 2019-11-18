import { defer } from 'rxjs';
import { renderToStaticMarkup } from 'react-dom/server';
import { delay, last, map } from 'rxjs/operators';

/**
 * Partial fork of https://github.com/BerkeleyTrue/react-redux-epic/
 *
 * Forked because of not supported renderToNodeStream method
 */
export function getRenderObservable(element, wrappedEpic) {
  function initialRender() {
    try {
      // This is required to launch all componentWillMount hooks for SSR components (start epics)
      renderToStaticMarkup(element);
    } catch (e) {
      // Error
    }

    wrappedEpic.complete();

    // When this observable emits - all active epics should have beed completed
    return wrappedEpic.getObservable();
  }

  return defer(initialRender).pipe(
    // allow wrappedEpic[$$complete](); to complete before calling unsubscribe
    // otherwise this could - author didn't complete sentence, but you can contact https://github.com/BerkeleyTrue/
    delay(0),
    last(null, null, null), // Looks like we're cleaning any values coming from stream, guess we need it
    map(() => {
      wrappedEpic.unsubscribe();

      return element;
    })
  );
}
