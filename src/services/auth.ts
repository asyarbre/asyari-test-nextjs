import callAPI from './api';
import { LoginTypes } from './types';

const URL_API = process.env.NEXT_PUBLIC_API_URL;

export async function handleLogin(data: LoginTypes) {
  const url = `${URL_API}/login`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
}

export async function handleRegister(data: LoginTypes) {
  const url = `${URL_API}/register`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
}
