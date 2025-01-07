import { Menu } from "@/components/Menu";
import { Button } from "@/components/ui/button";
import { Flex, Image, Text } from "@chakra-ui/react";
import QuadradosAvatar from "/assets/images/formas-avatar.svg";

export const Folio = () => {
  return (
    <Flex w="100%" h="100vh" flexDirection="column" px={10} py={10}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="3.125rem">
          <Text as="span" color="#8429FE">
            A
          </Text>
          <Text as="span" color="#FFF">
            L
          </Text>
          <Text as="span" color="#8429FE">
            A
          </Text>
          <Text as="span" color="#FFF">
            N
          </Text>
          <Text as="span" color="#8429FE">
            A
          </Text>
        </Text>
        {/* <IconButton src="assets/images/menu.svg" boxSize="50px" mt={4} /> */}
        <Menu />
      </Flex>

      <Flex
        flexDir="row"
        alignItems="center"
        justifyContent="space-evenly"
        py={12}
      >
        <Flex flexDir="column" alignItems="center">
          <Text fontSize="4rem">Olá, me chamo Alana.</Text>
          <Text fontSize="2.25rem">Desenvolvedora Front-End.</Text>
          <Button
            w="100%"
            mt={5}
            p={7}
            bgColor="#8429FE"
            borderRadius="4px"
            fontSize="1.625rem"
          >
            Curriculum Vitae
          </Button>
        </Flex>

        <Flex>
          <Image src={QuadradosAvatar} />
        </Flex>
      </Flex>
    </Flex>
  );
};
