import ky from 'ky';
import {getItem} from 'src/utils/storage.ts';

import config from 'react-native-config';

const api = ky.create({
  prefixUrl: config.API_URL,
  // prefixUrl: 'https://api.theloadedkitchen.com/api',
  retry: 0,
  hooks: {
    beforeRequest: [
      async request => {
        const token = await getItem('userToken');

        if (token) {
          request.headers.set('x-auth-token', token);
        }
      },
    ],
  },
});

export default api;
