import { StyleSheet } from 'react-native';
import { uiColors } from '@utils/colors';
const s = StyleSheet.create({
  container: {
    flexDirection: 'column',
    display: 'flex',
    padding: 16,
    flex: 1,
  },
  addCardText: {
    color: uiColors.white.normal,
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 0.3,
  },
  cardDetailsAndTypeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardDetailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

export default s;
