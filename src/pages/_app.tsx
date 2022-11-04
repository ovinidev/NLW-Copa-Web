import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../services/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
