import { API_URL } from '../config';

export async function httpRequest(options, endpoint) {
  const response = await fetch(`${API_URL}${endpoint}`, options);
  if (response.status === 204) return;
  const data = await response.json();

  if (!response.ok) throw new Error(data.error);

  return data;
}
