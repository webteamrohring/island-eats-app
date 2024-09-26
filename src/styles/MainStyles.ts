import {StyleSheet, ViewStyle} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const gutterConstant = 7.77;

export const gutterWideConstant = 15.54;

export const gutters = responsiveScreenWidth(gutterConstant);
export const guttersWide = responsiveScreenWidth(gutterWideConstant);

export const fullWidth = responsiveWidth(100) - gutters * 2;

export const fullWidthWide = responsiveWidth(100) - guttersWide * 2;

export const halfWidth = (gap = 0) => responsiveWidth(50 - gap / 2) - gutters;
export const halfWidthWide = (gap = 0) =>
  responsiveWidth(50 - gap) - guttersWide;

export const qrterWidth = responsiveWidth(25) - gutters;

export const fullHeight = responsiveHeight(100) - gutters;

export const centerContent: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const fillContent = {
  width: '100%',
  height: '100%',
};

export const circle = (size: number) => {
  return {
    width: size,
    height: size,
    borderRadius: size,
  };
};

export const imageContain = (size: number) => {
  return {
    width: size,
    height: size,
    resizeMode: 'contain',
  };
};

export const centerCircle = (size: number) => {
  return {
    width: size,
    height: size,
    borderRadius: size,
    justifyContent: 'center',
    alignItems: 'center',
  };
};
export default StyleSheet.create({});

export class fullWidthCompact {}
