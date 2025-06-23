import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import { Genre } from "../entities/Genre";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

// interface Props {
//   gameQuery: GameQuery;
// // }


const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const fetchGamesCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  return (
    <>
      <InfiniteScroll dataLength={fetchGamesCount} hasMore={!!hasNextPage} next={()=> fetchNextPage()} loader={<Spinner/>}>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          padding="10px"
          spacing={6}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}

          {/* {data?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))} */}
        </SimpleGrid>
      </InfiniteScroll>
      {/* {hasNextPage && (
        <Button marginY={5} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "LoadMore"}
        </Button>
      )}{" "} */}
    </>
  );
};

export default GameGrid;

// const GameGrid = ({ gameQuery }: Props) => {
//   const {
//     data,
//     error,
//     isLoading,
//     isFetchingNextPage,
//     fetchNextPage,
//     hasNextPage,
//   } = useGames(gameQuery);
//   const skeletons = [1, 2, 3, 4, 5, 6];

//   if (error) return <Text>{error.message}</Text>;

//   const fetchGamesCount =
//     data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

//   return (
//     <>
//       <InfiniteScroll dataLength={fetchGamesCount} hasMore={!!hasNextPage} next={()=> fetchNextPage()} loader={<Spinner/>}>
//         <SimpleGrid
//           columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
//           padding="10px"
//           spacing={6}
//         >
//           {isLoading &&
//             skeletons.map((skeleton) => (
//               <GameCardContainer key={skeleton}>
//                 <GameCardSkeleton />
//               </GameCardContainer>
//             ))}
//           {data?.pages.map((page, index) => (
//             <React.Fragment key={index}>
//               {page.results.map((game) => (
//                 <GameCardContainer key={game.id}>
//                   <GameCard game={game} />
//                 </GameCardContainer>
//               ))}
//             </React.Fragment>
//           ))}

//           {/* {data?.results.map((game) => (
//         <GameCardContainer key={game.id}>
//           <GameCard game={game} />
//         </GameCardContainer>
//       ))} */}
//         </SimpleGrid>
//       </InfiniteScroll>
//       {/* {hasNextPage && (
//         <Button marginY={5} onClick={() => fetchNextPage()}>
//           {isFetchingNextPage ? "Loading..." : "LoadMore"}
//         </Button>
//       )}{" "} */}
//     </>
//   );
// };

// export default GameGrid;

