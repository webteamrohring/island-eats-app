import Api from '../api';

export async function getRequest(endpoint) {
  try {
    const res = await Api.get(endpoint);
    return {...res, ok: true};
  } catch (error) {
    return {status: error.status};
  }
}

export async function postRequest(endpoint, params) {
  try {
    const res = await Api.post(endpoint, params);
    return {...res, ok: true};
  } catch (error) {
    return error.response;
  }
}

export async function putRequest(endpoint, params) {
  try {
    const res = await Api.put(endpoint, params);
    return {...res, ok: true};
  } catch (error) {
    return {status: error.response.status};
  }
}

export async function deleteRequest(endpoint) {
  try {
    const res = await Api.delete(endpoint);
    return {...res, ok: true};
  } catch (error) {
    return {status: error.status};
  }
}

export async function getIp() {
  try {
    const response = await fetch('https://geolocation-db.com/json/');
    const data = await response.json();
    return data.IPv4;
  } catch (error) {
    throw new Error('Ip is missing');
  }
}
