import { StyleSheet } from 'react-native';
import { uiColors } from '@utils/colors';

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'flex-start',
  },
  totalEarningsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  totalEarningsText: {
    color: uiColors.white.normal,
    fontSize: 10,
    fontWeight: '500',
  },
  totalEarningsNumber: {
    color: uiColors.white.normal,
    fontSize: 28,
    fontWeight: '600',
  },
  orderDetailContainer: {
    width: '100%',
    flexDirection: 'column',
  },
  orderTitleAndAmount: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderDetailDate: {
    color: uiColors.white.normal,
    fontSize: 10,
    fontWeight: '500',
  },
  orderDetailLocation: {
    color: uiColors.white.darkHover,
    fontSize: 10,
    fontWeight: '500',
  },
  orderDetailTitle: {
    color: uiColors.white.normal,
    fontSize: 12,
    fontWeight: '600',
  },
  orderDetailAmount: {
    color: uiColors.white.normal,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default s;
