import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar/>
      <Box padding={5}>
        
      <Heading> Wooooooooooow</Heading>
      <Text>
        {isRouteErrorResponse(error) ? "Page does not exist" : "Error"}
      </Text>
      </Box>
    </>
  );
};

export default ErrorPage;

