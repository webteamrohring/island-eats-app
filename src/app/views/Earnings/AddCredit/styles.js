import { StyleSheet } from 'react-native';
import { uiColors } from '@utils/colors';

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'flex-start',
  },
  instructionTextContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructionText: {
    color: uiColors.white.normal,
    fontSize: 14,
    fontWeight: 400,
  },
});

export default s;
