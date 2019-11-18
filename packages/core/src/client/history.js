import { createBrowserHistory } from 'history';
import { canUseDOM } from '../helpers/general';

export const history = canUseDOM() ? createBrowserHistory() : {};
