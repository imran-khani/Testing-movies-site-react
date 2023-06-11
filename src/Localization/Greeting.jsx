import { useContext } from "react";
import LocalizationContext from "../context/LocalizationContext";

const Greeting = () => {
  const localizationContext = useContext(LocalizationContext);
  const { language, localLanguage, onChooseLanguage } = localizationContext;

  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-6xl mx-auto p-5">
        <div className="mt-5 p-5 flex gap-5 ">
          <button
            onClick={() => onChooseLanguage("en")}
            className="px-2 py-2 bg-indigo-500 rounded text-white "
          >
            English
          </button>
          <button
            onClick={() => onChooseLanguage("it")}
            className="px-2 py-2 bg-indigo-500 rounded text-white "
          >
            Italy
          </button>
          <button
            onClick={() => onChooseLanguage("fr")}
            className="px-2 py-2 bg-indigo-500 rounded text-white "
          >
            France
          </button>
        </div>
        <div>
          <h1>{localLanguage[language].Greeting}</h1>
          <p>{localLanguage[language].text}</p>
        </div>
      </div>
    </>
  );
};

export default Greeting;
