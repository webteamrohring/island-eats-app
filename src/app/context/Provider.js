import React, {useEffect, useReducer, useContext} from 'react';
import {IslandDispatchContext, IslandContext} from './Context';

export function IslandProvider({children}) {
  const [userState, userDispatch] = useReducer(userReducer, initialUser);

  const {USER} = DISPATCH_TYPE;

  const dispatch = (dispatchType, data, type = 'upsert') => {
    const action = {type, data};
    switch (dispatchType) {
      case USER:
        return userDispatch(action);
      default:
        console.error(`Unknown dispatch type: ${dispatchType}`);
    }
  };

  return (
    <IslandContext.Provider value={{userState}}>
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
