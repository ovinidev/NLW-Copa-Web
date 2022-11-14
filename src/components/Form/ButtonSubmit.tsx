import { Button, ButtonProps, Flex } from "@chakra-ui/react";

interface ButtonSubmitProps extends ButtonProps {}

export const ButtonSubmit = ({ ...rest }: ButtonSubmitProps) => {
  return (
    <Button
      w="10.6rem"
      h="3.6rem"
      bg="#F7DD43"
      color="#09090A"
      fontSize={{ base: "0.7rem", "2xl": "0.87rem" }}
      fontWeight={700}
      borderRadius="4px"
      textTransform="uppercase"
      transition="all 0.5s ease"
      _hover={{ filter: "brightness(1.2)" }}
      {...rest}
    >
      Criar meu bolão
    </Button>
  );
};
