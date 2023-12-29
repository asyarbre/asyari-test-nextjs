import callAPI from './api';

const URL_API = process.env.NEXT_PUBLIC_API_URL;

export async function handleGetDetailUser() {
  const url = `${URL_API}/user`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function handleLogout() {
  const url = `${URL_API}/user/logout`;

  return callAPI({
    url,
    method: 'DELETE',
    token: true,
  });
}
