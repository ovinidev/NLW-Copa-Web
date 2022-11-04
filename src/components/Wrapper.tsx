import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Flex
      w={1124}
      h={{ base: "", "2xl": 700 }}
      justify="space-between"
      direction={{ base: "column", "2xl": "row" }}
      align={{ base: "center", "2xl": "flex-start" }}
      mt={{ base: "4rem", "2xl": 0 }}
    >
      {children}
    </Flex>
  );
};
