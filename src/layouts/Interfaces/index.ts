import {TextStyle, ViewStyle} from 'react-native';
import {ReactNode} from 'react';
import type * as React from 'react';
import {RefreshControlProps} from 'react-native/Libraries/Components/RefreshControl/RefreshControl';

export type MainLayoutContainerProps = {
  headerComponent?: ReactNode;
  headerStyle?: ViewStyle;
  headerHeight?: number;
  scrollable?: boolean;
  scrollViewRef?: any;
  refreshControl?: React.ReactElement<RefreshControlProps> | undefined;
  isModal?: boolean;
  contentContainerStyle?: ViewStyle;
  contentStyle?: ViewStyle;
  compact?: boolean;
  hasBackButton?: boolean;
  hasStatusBar?: boolean;
  title?: string | undefined;
  onBackPress?: () => void;
  titleFont?: TextStyle;
  titleStyle?: ViewStyle;
  titleContainerStyle?: ViewStyle;
  backIcon?: string;
  topBarStyle?: ViewStyle;
  keyboardBehavior?: 'height' | 'position' | 'padding' | undefined;
  footerComponent?: ReactNode;
  footerHeight?: number;
  footerStyle?: ViewStyle;
};

export type TopBarProps = {
  hasBackButton?: boolean;
  onBackPress?: (() => void) | undefined;
  title?: string | undefined;
  titleFont?: TextStyle;
  titleStyle?: ViewStyle;
  titleContainerStyle?: ViewStyle;
  backIcon?: string;
  topBarStyle?: ViewStyle;
};
