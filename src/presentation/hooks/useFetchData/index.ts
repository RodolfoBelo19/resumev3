import { AxiosHttpClient } from "@/infra/http/axiosHttpClient";
import { useState, useEffect } from "react";

export const useFetchData = <T>(url: string) => {
  const [data, setData] = useState<T | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const httpClient = new AxiosHttpClient();

  if (!url) {
    throw new Error("URL is required");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await httpClient.get({
          url: `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
        });
        setData(response.data);
      } catch (error) {
        // Lida com o erro de requisição, se necessário
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading };
};

