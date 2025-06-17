import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { Genre } from "../entities/Genre";


const apiClient = new APIClient<Genre>('/genres')

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000
  // () => apiClient
  // .get<FetchResponse<Genre>>("/genres").then(res=> res.data),
  // staleTime: 24 * 60 * 60 * 1000
})

export default useGenres;