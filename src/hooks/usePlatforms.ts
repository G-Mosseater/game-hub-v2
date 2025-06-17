import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
// import apiClient from "../services/api-client";
import  APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "../entities/Platform";


const apiClient = new APIClient<Platform>('/platforms/lists/parents')


const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: () => apiClient.getAll({}),
  //   apiClient
  // .get<FetchResponse<Platform>>("/platforms/lists/parents").then(res=> res.data),
  staleTime: 24 * 60 * 60 * 1000,
  // initialData: {count: platforms.length, results: platforms}
})




export default usePlatforms;
