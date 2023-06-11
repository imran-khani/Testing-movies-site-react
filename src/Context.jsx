import { useState } from "react";
import Dashboard from "./Localization/Dashboard";
import LocalizationContext from "./context/LocalizationContext";

const Context = () => {
  const [language, setLanguage] = useState("en");

  const localLanguage = {
    en: {
      Greeting: "Hello",
      text: "Welcome to our website",
    },
    it: {
      Greeting: "Ciao!",
      text: "Benvenuti sul nostro sito web",
    },
    fr: {
      Greeting: "Bonjour !",
      text: "Benvenuti sul nostro sito web",
    },
  };
  const languageHandler = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto flex justify-center  py-10">
        <LocalizationContext.Provider
          value={{
            localLanguage,
            language,
            onChooseLanguage: languageHandler,
          }}
        >
          <Dashboard />
        </LocalizationContext.Provider>
      </div>
    </>
  );
};

export default Context;
