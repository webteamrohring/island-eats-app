export const initialUser = {};

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'upsert': {
      return {...state, ...action.data};
    }
    case 'delete': {
      return initialUser;
    }
    default: {
      throw new Error('Unknown action issue: ' + action.type);
    }
  }
};
