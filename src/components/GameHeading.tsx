import { Heading } from "@chakra-ui/react";
// import { GameQuery } from '../App'
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import { useGameQueryStore } from "../store";
// interface Props {
//   gameQuery: GameQuery
// }

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
// const GameHeading = ({ gameQuery }: Props) => {

//   const genre = useGenre(gameQuery.genreId)
//   const platform = usePlatform(gameQuery.platformId)

//   const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

//   return (
//     <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
//   )
// }

// export default GameHeading

