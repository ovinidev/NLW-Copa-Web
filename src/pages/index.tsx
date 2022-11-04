import {
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { ButtonSubmit } from "../components/Form/ButtonSubmit";
import { Input } from "../components/Form/Input";
import { Logo } from "../components/Logo";
import { Avatars } from "../components/Avatars";
import { CheckMessages } from "../components/CheckMessages";
import { Background } from "../components/Background";
import { Wrapper } from "../components/Wrapper";
import { getPools, getUsers } from "../api/axiosInstance";
import { GetServerSideProps } from "next";

export default function Home(props: any) {
  const isDesktop = useBreakpointValue({ base: false, "2xl": true });

  return (
    <Background>
      <Wrapper>
        <Flex direction="column" w={{ base: 300, "2xl": 489 }}>
          <Logo />
          <Heading fontWeight={700} fontSize="3rem" color="#FFF">
            Crie seu próprio bolão da copa e compartilhe entre amigos!
          </Heading>

          <Avatars usersCount={props.usersCount} />

          <Flex justify="space-between" mb="1.2rem">
            <Input />
            <ButtonSubmit />
          </Flex>

          <Text
            color="#8D8D99"
            fontSize="0.875rem"
            fontWeight={400}
            lineHeight={6}
          >
            Após criar seu bolão, você receberá um código único que poderá usar
            para convidar outras pessoas 🚀
          </Text>

          <CheckMessages poolsCreated={props.poolsCount} />
        </Flex>

        {isDesktop && (
          <Flex w={518} h="100%" align="center" justify="center">
            <Image src="/mobile.png" alt="Avatares" />
          </Flex>
        )}
      </Wrapper>
    </Background>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const poolsCount = await getPools();
  const usersCount = await getUsers();

  return {
    props: {
      poolsCount,
      usersCount,
    },
  };
};
