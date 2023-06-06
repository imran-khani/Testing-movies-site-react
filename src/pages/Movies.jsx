import React, { useEffect, useState, Suspense } from "react";

const Movies = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const apiKey = "94545eb1";
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=movie&page=${page}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();

        setTotalResults(jsonData.totalResults);
        setData((prevData) => {
          const newArray = [...prevData, ...jsonData.Search];
          const newData = Array.from(
            new Set(newArray.map((item) => item.imdbID))
          );
          return newData.map((id) =>
            newArray.find((item) => item.imdbID === id)
          );
        });
        setLoading(false);
        console.log(jsonData);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const LazyImage = React.lazy(() => import("./LazyImage"));

  return (
    <div className="p-5">
      {loading ? (
        <div className="loader">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-md overflow-hidden shadow-md shadow-white"
            >
              <Suspense fallback={<div>Loading...</div>}>
                <LazyImage src={item.Poster} alt={item.Title} />
              </Suspense>
              <div className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-2 text-md text-indigo-500">
                  {item.Title}
                </h3>
                <p className="text-gray-400 p-2 line-clamp-2">{item.Year}</p>
                <p>{item.Type}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {data.length < totalResults && (
        <button
          className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded"
          onClick={loadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Movies;
