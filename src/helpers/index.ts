import {Image} from 'react-native-image-crop-picker';
import api from 'src/api';
import ky from 'ky';
import {Alert} from 'react-native';

export const momentCalendarConfig = {
  lastDay: '[Yesterday]',
  sameDay: '[Today]',
  nextDay: '[Tomorrow]',
  lastWeek: '[last] dddd',
  nextWeek: 'dddd',
  sameElse: 'L',
};

export const uploadAssets = async (assets: Image[]) => {
  const assetUrls = await Promise.all(
    assets.map(async ({filename, path, size, mime}) => {
      const presignedUrl = await api
        .get(
          `assets/generate-presigned-url?filename=${filename}&contentType=${mime}`,
        )
        .json()
        .then(({url}: any) => url)
        .catch(error => Alert.alert('Server Error', error.message));

      if (presignedUrl) {
        await ky
          .put(presignedUrl, {
            body: {
              uri: path,
              type: mime,
              name: filename,
              size,
            },
            headers: {
              'Content-Type': mime,
            },
          })
          .json()
          .catch(async error => {
            Alert.alert('Server Error', error.message);
          });
        return presignedUrl.split('?')[0];
      }

      return null;
    }),
  );
  return assetUrls.filter(
    asset => typeof asset !== 'undefined' && asset !== null,
  );
};

export default {};
