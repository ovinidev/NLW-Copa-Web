import { Flex, HStack, Image, Text } from "@chakra-ui/react";

interface AvatarsProps {
  usersCount: number;
}

export const Avatars = ({ usersCount }: AvatarsProps) => {
  return (
    <Flex fontSize="1.25rem" fontWeight={700} align="center" my="2.5rem">
      <Image src="/avatares.png" alt="avatars" />
      <HStack align="center" spacing="1">
        <Text ml="4px" color="#129E57">
          +{usersCount}
        </Text>
        <Text color="#E1E1E6">pessoas já estão usando</Text>
      </HStack>
    </Flex>
  );
};
