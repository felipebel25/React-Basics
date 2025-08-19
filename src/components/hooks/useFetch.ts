import { useEffect, useState } from "react";

const initialValue = {
  data: {},
  isLoading: false,
  error: false,
};

export const useFetch = (url: string) => {
  const [data, setData] = useState(initialValue);
  const [iteration, setIteration] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData({
          ...data,
          isLoading: true,
        });
        const response = await fetch(url);
        const result = await response.json();

        if (!response.ok)
          return setData({
            ...data,
            error: true,
          });

        setData({
          ...data,
          data: result,
          error: false,
        });
      } catch (error) {
        setData({
          ...data,
          error: true,
        });
        console.error(error);
      } finally {
        setData((prevValue) => ({ ...prevValue, isLoading: false }));
      }
    };
    fetchData();
  }, [iteration]);

  const doFetch = () => setIteration(!iteration);

  return [
    {
      result: data.data,
      error: data.error,
      isLoading: data.isLoading,
    },
    doFetch,
  ];
};
