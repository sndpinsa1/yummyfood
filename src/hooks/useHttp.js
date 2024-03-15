import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message || "Something went wrong");
  }

  return json;
}

export const useHttp = (url, config, initData) => {
  const [data, setData] = useState(initData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  function clearData() {
    setData(null);
  }

  const sendRequest = useCallback(async (requestData) => {
    setIsLoading(true);
    try {
      const data = await sendHttpRequest(url, { ...config, body: requestData });
      setData(data);
    } catch (error) {
      setError(error.message || "Something went wrong");
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
};
