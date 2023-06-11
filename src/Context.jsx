const Context = () => {
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
  return (
    <>
      <div className="max-w-6xl mx-auto flex justify-center  py-10">
        <h1>hello</h1>
      </div>
    </>
  );
};

export default Context;
