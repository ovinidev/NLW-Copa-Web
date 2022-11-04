import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CheckMessagesProps {
  poolsCreated?: number;
}

export const CheckMessages = ({ poolsCreated }: CheckMessagesProps) => {
  return (
    <Flex
      justify="space-between"
      borderTop="1px solid #323238"
      pt="2.5rem"
      mt="2.5rem"
    >
      <Flex color="#E1E1E6" w={170} align="center" justify="space-between">
        <Image src="/iconCheck.svg" alt="phones" />
        <Box>
          <Text fontSize="1.5rem" fontWeight={700}>
            +{poolsCreated}
          </Text>
          <Text fontSize="1rem" fontWeight={400}>
            Bolões criados
          </Text>
        </Box>
      </Flex>

      <Box borderRight="1px solid #323238" />

      <Flex color="#E1E1E6" w={170} align="center" justify="space-between">
        <Image src="/iconCheck.svg" alt="phones" />
        <Box>
          <Text fontSize="1.5rem" fontWeight={700}>
            +192.847
          </Text>
          <Text fontSize="1rem" fontWeight={400}>
            Palpites criados
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
