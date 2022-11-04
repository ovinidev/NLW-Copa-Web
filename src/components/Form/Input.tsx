import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {}

export const Input = ({ ...rest }: InputProps) => {
  return (
    <ChakraInput
      placeholder="Qual o nome do seu bolão"
      w="19.1rem"
      h="3.6rem"
      borderWidth="1px"
      borderColor="#323238"
      borderRadius="4px"
      p="16px 24px"
      fontSize="0.87rem"
      color="#C4C4CC"
      bg="#202024"
      transition="all 0.5s ease"
      _hover={{ filter: "brightness(1.2)" }}
      focusBorderColor="#424243"
      {...rest}
    />
  );
};
