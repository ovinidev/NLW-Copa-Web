import {
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";

import { ButtonSubmit } from "../components/Form/ButtonSubmit";
import { Input } from "../components/Form/Input";
import { Logo } from "../components/Logo";
import { Avatars } from "../components/Avatars";
import { CheckMessages } from "../components/CheckMessages";
import { Background } from "../components/Background";
import { Wrapper } from "../components/Wrapper";
import { createPools, getPools, getUsers } from "../api/axiosInstance";
import { GetServerSideProps, GetStaticProps } from "next";
import { FormEvent, useCallback, useState } from "react";

export default function Home(props: any) {
  const isDesktop = useBreakpointValue({ base: false, "2xl": true });
  const [poolTitle, setPoolTitle] = useState("");

  const toast = useToast();

  async function createPoll(e: FormEvent) {
    e.preventDefault();
    try {
      if (poolTitle) {
        const { code } = await createPools({ title: poolTitle });

        await navigator.clipboard.writeText(code);

        toast({
          title: "Bolão criado com sucesso!",
          description: "Código do bolão copiado para a área de transferência",
          status: "success",
          variant: "solid",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      } else {
        throw new Error();
      }
    } catch (err: any) {
      toast({
        title: "Preencha o campo para criar um bolão.",
        status: "error",
        variant: "solid",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    } finally {
      setPoolTitle("");
    }
  }

  const handlePoolTitle = useCallback((value: string) => {
    setPoolTitle(value);
  }, []);

  return (
    <Background>
      <Wrapper>
        <Flex direction="column" w={{ base: 300, "2xl": 489 }}>
          <Logo />
          <Heading
            fontWeight={700}
            fontSize={{ base: "2.5rem", "2xl": "3rem" }}
            color="#FFF"
          >
            Crie seu próprio bolão da copa e compartilhe entre amigos!
          </Heading>

          <Avatars usersCount={props.usersCount} />

          <Flex
            onSubmit={createPoll}
            justify="space-between"
            mb="1.2rem"
            as="form"
          >
            <Input
              onChange={(e) => handlePoolTitle(e.target.value)}
              value={poolTitle}
            />
            <ButtonSubmit type="submit" />
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

export const getStaticProps: GetStaticProps = async () => {
  const [poolsCount, usersCount] = await Promise.all([getPools(), getUsers()]);

  return {
    props: {
      poolsCount,
      usersCount,
    },
    revalidate: 60 * 60 * 6, // 24 hours
  };
};
