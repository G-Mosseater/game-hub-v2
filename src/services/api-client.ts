import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5f368b8ee66f4967908cddbf5a5ac811",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  get = (id: number|string) => {
    return  axiosInstance
    .get<T>(this.endpoint + '/' + id)
    .then (
      (res) =>res.data
    )
  };
}
export default APIClient;

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

