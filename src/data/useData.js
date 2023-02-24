import { useState, useEffect } from 'react';

const useData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, [url]);

  console.log(data)
  return data;

}

export default useData;

