import { useContext } from 'react';
import { ErrorHandlerContext } from '../context/ErrorHandlerContext';

export default function useErrorHandler() {
  return useContext(ErrorHandlerContext);
}
