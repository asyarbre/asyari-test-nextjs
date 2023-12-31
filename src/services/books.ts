import { CreateBookTypes } from '@/services/types/index';

import callAPI from './api';

const URL_API = process.env.NEXT_PUBLIC_API_URL;

export async function handleCreateBook(data: CreateBookTypes) {
  const url = `${URL_API}/books/add`;

  return callAPI({
    url,
    method: 'POST',
    data,
    token: true,
  });
}

export async function handleAllBooks(page: number) {
  const url = `${URL_API}/books?page=${page}`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function handleDetailBook(id: string) {
  const url = `${URL_API}/books/${id}`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function handleUpdateBook(id: number, data: CreateBookTypes) {
  const url = `${URL_API}/books/${id}/edit`;

  return callAPI({
    url,
    method: 'PUT',
    data,
    token: true,
  });
}

export async function handleDeleteBook(id: number) {
  const url = `${URL_API}/books/${id}`;

  return callAPI({
    url,
    method: 'DELETE',
    token: true,
  });
}
