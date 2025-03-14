import { Menu } from "@/components/Menu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Flex, Image, Text } from "@chakra-ui/react";
import QuadradosAvatar from "/assets/images/formas-avatar.svg";
import { SkillsAnimation } from "@/components/SkillsAnimation";

const Folio = () => {
  return (
    <Flex w="100%" flexDirection="column" px={10} py={10}>
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
        <Menu />
      </Flex>

      <Flex
        flexDir="row"
        alignItems="center"
        justifyContent="space-evenly"
        py={12}
      >
        <Flex flexDir="column" alignItems="center">
          <Text fontSize="4rem">Hello, my name is Alana.</Text>
          <Text fontSize="2.25rem">Front-End Developer and QA.</Text>
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

      <Flex py={5}>
        <Flex flexDir="column" fontSize="5rem">
          <Text as="span" color="#8429FE">
            P
          </Text>
          <Text as="span" color="#FFF">
            R
          </Text>
          <Text as="span" color="#8429FE">
            O
          </Text>
          <Text as="span" color="#FFF">
            J
          </Text>
          <Text as="span" color="#8429FE">
            E
          </Text>
          <Text as="span" color="#FFF">
            T
          </Text>
          <Text as="span" color="#8429FE">
            O
          </Text>
          <Text as="span" color="#FFF">
            S
          </Text>
        </Flex>

        <Flex alignItems="center" justifyContent="center" ml="160px" gap={10}>
          <Card
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
            title="FlexGamer"
            src="assets/images/projetos/flexGamer.png"
            tags={["React", "TypeScript", "ChakraUI"]}
          />
          <Card
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
            title="FlexGamer"
            src="assets/images/projetos/flexGamer.png"
            tags={["React", "TypeScript", "ChakraUI"]}
          />
          <Card
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
            title="FlexGamer"
            src="assets/images/projetos/flexGamer.png"
            tags={["React", "TypeScript", "ChakraUI"]}
          />
          <Card
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
            title="FlexGamer"
            src="assets/images/projetos/flexGamer.png"
            tags={["React", "TypeScript", "ChakraUI"]}
          />
        </Flex>
      </Flex>

      <Flex py={5}>
        <Flex flexDir="column" fontSize="5rem">
          <Text as="span" color="#8429FE">
            S
          </Text>
          <Text as="span" color="#FFF">
            K
          </Text>
          <Text as="span" color="#8429FE">
            I
          </Text>
          <Text as="span" color="#FFF">
            L
          </Text>
          <Text as="span" color="#8429FE">
            L
          </Text>
          <Text as="span" color="#FFF">
            S
          </Text>
        </Flex>

        <Flex alignItems="center" justifyContent="center" ml="160px" gap={10}>
          <SkillsAnimation />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Folio;
