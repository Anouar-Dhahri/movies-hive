import React from "react";
import AppRoutes from "routes";
import { ChakraProvider } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getGenres, getConfig } from "apis/data";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getConfig());
    dispatch(getGenres());
  }, []);
  return (
    <ChakraProvider>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
