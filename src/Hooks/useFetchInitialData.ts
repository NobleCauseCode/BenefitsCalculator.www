import { useState, useEffect } from 'react';
import axios from 'axios';
import { Employee } from '../Models/Employee';
const useFetchInitialData = (url: string) => {
  const [data, setData] = useState<Employee[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      setData(response.data.results as Employee[]);
    };
    getData();
  }, [url]);

  return data;
};

export default useFetchInitialData;
