export const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api'
    : 'https://e-commerce-api-express.up.railway.app/api';
