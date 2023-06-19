import { useState, useEffect, useCallback } from "react";

type UseCaseProps = {
  execute: (url: string) => Promise<any>;
};

export const useFetchData = <T>(url: string, useCase: UseCaseProps) => {
  const [data, setData] = useState<T | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [prevUrl, setPrevUrl] = useState<string | undefined>(undefined);

  if (!url) {
    throw new Error("URL is required");
  }

  const fetchData = useCallback(async () => {
    try {
      const result = await useCase.execute(url);
      setData(result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }, [url, useCase]);

  useEffect(() => {
    if (url !== prevUrl) {
      setIsLoading(true);
      fetchData();
      setPrevUrl(url);
    }
  }, [url, prevUrl, fetchData]);

  return { data, isLoading };
};
