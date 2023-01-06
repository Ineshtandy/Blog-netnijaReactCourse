//externalising the logic into it's own file, were creating something
//called a custom hook
//this custom hook will have a unique functionality too

//custom hooks in react need to start with 'use' or wont work

import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch the data for the resource");
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
  }, [url]);

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
