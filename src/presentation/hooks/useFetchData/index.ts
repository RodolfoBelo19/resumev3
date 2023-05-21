import { AxiosHttpClient } from '@/infra/http/axiosHttpClient';
import { useEffect, useState } from "react";

export const useFetchData = <T>(url: string) => {
  const [data, setData] = useState<T>();

  const httpClient = new AxiosHttpClient();

  useEffect(() => {
    httpClient.get({
      url: `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
    }).then((response) => {
      setData(response.data);
    });
  }, [url]);

  return { data };
}