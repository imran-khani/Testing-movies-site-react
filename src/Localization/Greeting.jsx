import LocalizationContext from "../context/LocalizationContext";
import { useContext } from "react";
const Greeting = () => {
  const { language, localLanguage, languageHandler } =
    useContext(LocalizationContext);
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-6xl mx-auto p-5">
        <div className="mt-5 p-5 flex gap-5 ">
          <button
            onClick={() => languageHandler("en")}
            className="px-2 py-2 bg-indigo-500 rounded text-white "
          >
            English
          </button>
          <button
            onClick={() => languageHandler("it")}
            className="px-2 py-2 bg-indigo-500 rounded text-white "
          >
            Italy
          </button>
          <button
            onClick={() => languageHandler("fr")}
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
