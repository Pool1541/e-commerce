import { API_URL } from '../context/AuthContext';
import { toast } from 'sonner';

export async function httpRequest(options, endpoint) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error);
    }
    return data;
  } catch (error) {
    error.message.split(',').forEach((message) => {
      toast.error(message);
    });
  }
}
