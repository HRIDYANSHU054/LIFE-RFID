import { createContext, useContext, useState } from "react";

const initState = "english"; // "english" or "hindi"

const LanguageContext = createContext(initState);

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(initState);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export { LanguageProvider, useLanguage };
