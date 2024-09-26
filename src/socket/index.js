import {io} from 'socket.io-client';
import config from 'react-native-config';

export const socket = io(config.SOCKET_URL);
// export const socket = io('https://api.theloadedkitchen.com/');
