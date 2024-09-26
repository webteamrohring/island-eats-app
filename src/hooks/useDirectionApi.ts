import {useEffect, useState} from 'react';
import config from 'react-native-config';
import ky from 'ky';
import {LocationType} from '@interfaces';

const DIRECTION_API_URL = 'https://api.mapbox.com/directions/v5/mapbox';
export default (from: LocationType | null, to: LocationType | undefined) => {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    if (from && typeof to !== 'undefined' && to) {
      onGetDirections().then(() => {});
    }
  }, [from, to]);

  const onGetDirections = async () => {
    const currentCoordinateString = `${from?.longitude},${from?.latitude}`;
    const deliveryCoordinateString = `${to?.longitude},${to?.latitude}`;

    const directionCoordinate = encodeURIComponent(
      `${currentCoordinateString};${deliveryCoordinateString}`,
    );

    const directionOptions =
      'alternatives=true&geometries=geojson&overview=simplified&steps=false&notifications=none';

    const url = `${DIRECTION_API_URL}/driving/${directionCoordinate}?${directionOptions}&access_token=${config.MAPBOX_PUBLIC_KEY}`;

    await ky
      .get(url)
      .json()
      .then(({routes}: any) => {
        const coordinates = routes[0]?.geometry?.coordinates;

        if (coordinates) {
          setCoordinates(coordinates);
        }
      })
      .catch(async error => {
        const errorDetails = await error.response.json();
        const status = error.response.status;

        console.log({status, ...errorDetails});
      });
  };

  return coordinates;
};
