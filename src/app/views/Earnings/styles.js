import { StyleSheet } from 'react-native';
import { uiColors } from '@utils/colors';
const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'flex-start',
  },
  scrollContainer: {
    padding: 16,
    alignItems: 'flex-start',
  },
  earningsText: {
    color: uiColors.white.normal,
    fontSize: 28,
    fontWeight: '600',
  },
  earningsSubText: {
    color: uiColors.white.darkActive,
    fontSize: 12,
    fontWeight: '400',
  },
  earningsDetail: {
    color: uiColors.white.normal,
    fontSize: 12,
    fontWeight: '500',
  },
  fullWidth: {
    width: '100%',
  },
  dividerRow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  iconSpacing: {
    marginTop: 2,
  },
  historyTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  historyTitle: {
    color: uiColors.white.darkActive,
    fontSize: 12,
    fontWeight: '400',
    marginTop: 20,
  },
  historyList: {
    width: '100%',
    flexDirection: 'column',
    gap: 12,
    marginTop: 16,
  },
  orderDetailContainer: {
    flexDirection: 'column',
  },
  orderDetailLabel: {
    color: uiColors.white.normal,
    fontSize: 10,
    fontWeight: '500',
  },
  orderDetailTitle: {
    color: uiColors.white.normal,
    fontSize: 12,
    fontWeight: '600',
  },
  orderDateTimeRow: {
    flexDirection: 'row',
  },
  orderDetailDate: {
    color: uiColors.white.darkHover,
    fontSize: 10,
    fontWeight: '500',
  },
  orderDetailSeparator: {
    color: uiColors.white.darkHover,
    fontSize: 10,
    fontWeight: '500',
  },
  orderDetailAmount: {
    color: uiColors.white.normal,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default s;
