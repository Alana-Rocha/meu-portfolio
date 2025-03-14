import { RouterProvider } from "@tanstack/react-router";
import { router } from "./utils/router";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "../theme";
import '@fontsource-variable/jaro/index.css';
import { Suspense } from "react";
import { LoadingScreen } from "./components/Loading/Suspense";

export const App = () => {
  return (
    <ChakraProvider value={system}>
      <Suspense fallback={<LoadingScreen />}>
        <RouterProvider router={router} />
      </Suspense>
    </ChakraProvider>
  );
};

export default App;
