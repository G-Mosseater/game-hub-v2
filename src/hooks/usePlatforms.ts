import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
// import apiClient from "../services/api-client";
import  APIClient, { FetchResponse } from "../services/api-client";


const apiClient = new APIClient<Platform>('/platforms/lists/parents')


export interface Platform {
  id: number;
  name: string;
  slug: string;
}


const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: () => apiClient.getAll({}),
  //   apiClient
  // .get<FetchResponse<Platform>>("/platforms/lists/parents").then(res=> res.data),
  staleTime: 24 * 60 * 60 * 1000,
  // initialData: {count: platforms.length, results: platforms}
})




export default usePlatforms;
