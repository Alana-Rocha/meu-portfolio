import { RouterProvider } from "@tanstack/react-router";
import { router } from "./utils/router";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "../theme";
import '@fontsource-variable/jaro/index.css';

export const App = () => {
  return (
    <ChakraProvider value={system}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
