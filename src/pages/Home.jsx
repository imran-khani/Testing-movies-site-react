import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="text-center py-10 max-w-6xl mx-auto">
        <h1 className="text-4xl mb-5">Home</h1>
        <p className="w-[500px] mx-auto ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          aperiam quis reiciendis nam similique temporibus soluta, quisquam at
          ullam dicta quaerat odio molestias minus natus error eos ad
          consequuntur accusantium.
        </p>
      </header>

      {/* button using tailwindcss  and center it */} 
      <div className="text-center"> 
       <Link to={'/movies'}><button className="bg-indigo-500 text-white px-4 py-2 rounded">
         See Movies List
        </button> </Link> 
      </div>
    </>
  );
};

export default Home;
