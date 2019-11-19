import { createContext, createElement, useContext } from 'react';

const HttpClientService = (endpoint: string) => {
  function status(response: Response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  function json(response: Response) {
    return response.json();
  }

  function createFetchConfig<T>(
    config: Partial<{
      method: 'POST' | 'PUT' | 'DELETE' | 'GET';
      data: T;
    }>
  ): RequestInit {
    const { data, method } = config;
    return {
      method,
      ...(data ? { body: JSON.stringify(data) } : null),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    };
  }
  const createUrl = (url: string) => {
    return `${endpoint}/${url}`;
  };

  const get = <T>(url: string) => {
    return window
      .fetch(createUrl(url))
      .then(status)
      .then(json)
      .then((data: T) => data);
  };
  const post = <T>(url: string, data: T) => {
    return window
      .fetch(createUrl(url), createFetchConfig({ method: 'POST', data }))
      .then(status)
      .then(json)
      .then((data: T) => data);
  };
  const put = <T>(url: string, data: T) => {
    return window
      .fetch(createUrl(url), createFetchConfig({ method: 'PUT', data }))
      .then(status)
      .then(json);
  };
  const remove = (url: string) => {
    return window
      .fetch(createUrl(url), createFetchConfig({ method: 'DELETE' }))
      .then(status)
      .then(json);
  };

  const api = {
    get,
    post,
    put,
    remove
  };

  return api;
};

type HttpClientApi = ReturnType<typeof HttpClientService>;

const HttpClientContext = createContext(null as HttpClientApi | null);

export const useHttpClient = () => {
  const context = useContext(HttpClientContext);
  if (!context) {
    throw new Error(`Missing HttpClient Provider!`);
  }

  return context;
};

export const Provider = (props: {
  endpoint: string;
  children: React.ReactElement;
}) => {
  const { endpoint, children } = props;

  const api = HttpClientService(endpoint);

  return createElement(HttpClientContext.Provider, { value: api }, children);
};
