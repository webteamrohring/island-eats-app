export const isTokenExpired = async () => {
  // const currentTime = Date.now();
  // const expirationTime = await getItem(TOKEN_EXPIRATION);
  // if (!expirationTime || expirationTime === 'NaN') {
  //   return true;
  // }
  // const parseExpirationTime = parseInt(expirationTime, 10);
  // return currentTime > parseExpirationTime;
};

export const generateNewToken = async (refreshToken: string) => {

  // const currentTime = Date.now();
  // const id = await getItem(USER_ID);
  //
  // console.log({id, currentTime});
  //
  // const params = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'x-auth-token': token,
  //   },
  //   body: JSON.stringify({id, currentTime}),
  // };
  // const response = await fetch(
  //   `${process.env.REACT_APP_BACKEND}${'auth/refresh'}`,
  //   params,
  // );
  // const result = await response.json();
  //
  // localStorage.setItem(TOKEN, result.token);
  // localStorage.setItem(TOKEN_EXPIRATION, result.expirationTime);
  // return result.token;
};
