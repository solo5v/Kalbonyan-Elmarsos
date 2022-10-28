import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config';

const setimeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const API_RESPONSE = await Promise.race([
      fetch(url),
      setimeout(TIMEOUT_SEC),
    ]);

    const RES_DATA = await API_RESPONSE.json();

    if (!API_RESPONSE.ok)
      throw new Error(`${RES_DATA.message} , ${API_RESPONSE.status}`);

    return RES_DATA;
  } catch (err) {
    throw err;
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const postPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });

    const API_RESPONSE = await Promise.race([postPro, setimeout(TIMEOUT_SEC)]);

    const RES_DATA = await API_RESPONSE.json();

    if (!API_RESPONSE.ok)
      throw new Error(`${RES_DATA.message} , ${API_RESPONSE.status}`);

    return RES_DATA;
  } catch (err) {
    throw err;
  }
};
