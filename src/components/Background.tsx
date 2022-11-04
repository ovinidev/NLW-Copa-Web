import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BackgroundProps {
  children: ReactNode;
}

export const Background = ({ children }: BackgroundProps) => {
  return (
    <Flex
      h={{ base: "100%", "2xl": "100vh" }}
      w="100%"
      align="center"
      justify="center"
      bgSize="cover"
      backgroundImage="/BG-effects.png"
    >
      {children}
    </Flex>
  );
};
