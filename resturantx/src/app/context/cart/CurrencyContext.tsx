import { createContext, useContext, useState, ReactNode } from "react";

interface CurrencyOption {
  name: string;
  rate: number;
}

interface CurrencyContextType {
  selectedCurrency: CurrencyOption;
  setSelectedCurrency: (currency: CurrencyOption) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyOption>({
    name: "Dollar",
    rate: 1,
  });

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, setSelectedCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
