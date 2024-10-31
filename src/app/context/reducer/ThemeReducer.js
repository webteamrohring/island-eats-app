// themeReducer.js
import {LIGHT_THEME, DARK_THEME} from '@utils/colors';
import {THEME_ACTIONS} from '@utils/constants/contextConstants';

export const initialTheme = DARK_THEME;

export const themeReducer = (state, action) => {
  switch (action.type) {
    case THEME_ACTIONS.SET_LIGHT:
      return LIGHT_THEME;
    case THEME_ACTIONS.SET_DARK:
      return DARK_THEME;
    default:
      return state;
  }
};
