import { Card as ChakraCard, Flex, Image } from "@chakra-ui/react";
import { forwardRef } from "react";
import { Tag } from "./tag";
import closeIcon from "/assets/icons/close.svg";

export interface CardProps extends ChakraCard.RootProps {
  title: string;
  description: string;
  src: string;
  tags?: string[];
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ description, title, src, tags }) => {
    return (
      <Flex flexDir="column">
        <Flex
          bgColor="#8429FE"
          px={8}
          py={1}
          fontSize="2rem"
          width="fit-content"
        >
          {title}
        </Flex>
        <ChakraCard.Root
          maxW="sm"
          p={4}
          bgColor="#32086D"
          border="none"
          borderRadius="4px"
        >
          <Image src={src} alt="Green double couch with wooden legs" />
          <ChakraCard.Body gap="2" px={1}>
            <ChakraCard.Description color="#FFF" fontSize="1.125rem">
              {description}
            </ChakraCard.Description>
          </ChakraCard.Body>
          <ChakraCard.Footer gap="2" px={1}>   
            {tags?.map((tag, index) => (
              <Tag key={index} endElement={<Image src={closeIcon} />}>
                {tag}
              </Tag>
            ))}
          </ChakraCard.Footer>
        </ChakraCard.Root>
      </Flex>
    );
  }
);
