
import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from "./rerender";
import state from './state'

// eslint-disable-next-line no-undef
rerenderEntireTree(state);

serviceWorker.unregister();