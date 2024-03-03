import { createContext, useState } from 'react';

export const BillingContext = createContext();

export default function BillingContextProvider({ children }) {
  const [refetch, setRefetch] = useState(false);

  function refetchData() {
    setRefetch((prev) => !prev);
  }

  return (
    <BillingContext.Provider
      value={{
        refetch,
        refetchData,
      }}>
      {children}
    </BillingContext.Provider>
  );
}
