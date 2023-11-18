export const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api'
    : 'https://e-commerce-api-dev.4.us-1.fl0.io';
