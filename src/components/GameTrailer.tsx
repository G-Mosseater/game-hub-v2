import useTrailers from "../hooks/useTrailers";
import { Text } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  console.log(data?.results[0].name);
  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[2];
  return first ? (
  <>
  <Text>{first.name}</Text>
  <video poster={first.preview} src={first.data[480]} controls/> 
  </>) : null
};

export default GameTrailer;

