import io from 'socket.io-client';

import { ENV, LOCAL_SOCKET_URL, REMOTE_SOCKET_URL } from '../constants';

const serverURL = process.env.NODE_ENV === ENV.DEVELOPMENT ? LOCAL_SOCKET_URL : LOCAL_SOCKET_URL;

export const socket = io.connect(serverURL);
