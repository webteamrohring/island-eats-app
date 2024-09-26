import colors from '@styles/Colors.ts';

export const compressionBackgroundOptions = {
  taskName: 'Location',
  taskTitle: 'Location Tracking',
  taskDesc: 'Sending Current Location',
  taskIcon: {
    name: 'ic_launcher',
    type: 'mipmap',
  },
  color: colors.primary,
  linkingURI: '',
  parameters: {
    delay: 1000,
  },
};

export const sendLocationTask = async () => {
  // setInterval(() => {
  //   console.log('Send Location');
  //   try {
  //     //API Send Location
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, 3000);
};
