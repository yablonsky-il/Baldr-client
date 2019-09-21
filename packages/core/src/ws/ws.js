import io from 'socket.io-client';

import { ENV, LOCAL_SERVER_URL } from '../constants';

const serverURL = process.env.NODE_ENV === ENV.DEVELOPMENT ? LOCAL_SERVER_URL : null;

export const socket = io.connect(serverURL);
