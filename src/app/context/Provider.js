import React, {useReducer, useContext} from 'react';
import {IslandDispatchContext, IslandContext} from './Context';
import {userReducer, initialUser} from './reducer/UserReducer';
import {themeReducer, initialTheme} from './reducer/ThemeReducer';
import {DISPATCH_TYPE} from '@utils/constants/contextConstants';

export function IslandProvider({children}) {
  const [userState, userDispatch] = useReducer(userReducer, initialUser);
  const [themeState, themeDispatch] = useReducer(themeReducer, initialTheme);

  const {USER} = DISPATCH_TYPE;

  const dispatch = (dispatchType, data, type = 'upsert') => {
    const action = {type, data};
    switch (dispatchType) {
      case USER:
        return userDispatch(action);
      case THEME:
        return themeDispatch(action);
      default:
        console.error(`Unknown dispatch type: ${dispatchType}`);
    }
  };

  return (
    <IslandContext.Provider value={{userState, themeState}}>
      <IslandDispatchContext.Provider value={dispatch}>
        {children}
      </IslandDispatchContext.Provider>
    </IslandContext.Provider>
  );
}

export function useIsland() {
  return useContext(IslandContext);
}

export function useIslandDispatch() {
  return useContext(IslandDispatchContext);
}

export async function dispatchUser(dispatch) {
  // const response = await getRequest('users');
  if (response.ok) {
    dispatch('user', response.data.user);
  }
}
